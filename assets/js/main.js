window.space = {};

window.$ajaxGetParams = function(data) {
  var arr = [];
  for (var param in data) {
    arr.push(encodeURIComponent(param) + "=" + encodeURIComponent(data[param]));
  }
  return arr.join("&");
};

window.$ajax = function(options) {
  options = options || {};
  options.type = (options.type || "GET").toUpperCase();
  options.dataType = options.dataType || "json";
  if (options.async === undefined) {
    options.async = true;
  }
  var params = window.$ajaxGetParams(options.data);
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var status = xhr.status;
      if (status >= 200 && status < 300) {
        if (options.dataType === "json") {
          options.success && options.success(JSON.parse(xhr.responseText));
        } else {
          options.success && options.success(xhr.responseText);
        }
      } else {
        options.error && options.error(status);
      }
    }
  };
  if (options.type == "GET") {
    xhr.open("GET", options.url + "?" + params, options.async);
    xhr.send(null);
  } else if (options.type == "POST") {
    xhr.open("POST", options.url, options.async);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(params);
  }
};

const getRandNum = function(min = 1, max = 1.5) {
  return (Math.random() * (max - min) + min).toFixed(2);
};

space.initSpace = function(color = ["#8779d2"]) {
  let isAnimating = false;
  var space = new Object();
  space.revealer = document.getElementsByClassName("revealer")[0];
  space.fullview = document.getElementsByClassName("fullview")[0];
  space.fullviewItems = space.fullview.getElementsByClassName("fullview__item");
  space.btns = document.querySelectorAll(".menu__item:not(.linkout)");
  space.moreBtn = document.getElementsByClassName("space__back")[0];
  space.current = -1;

  space.toggleMoreBtn = function(action) {
    let speed = getRandNum(1, 1.5);
    anime({
      targets: space.moreBtn,
      duration: speed * 1000,
      delay: 200 + (speed / 2) * 1000,
      easing: "easeOutQuint",
      translateY: action === "hide" ? 0 : 1 * space.moreBtn.clientHeight
    });
  };

  space.toggleRevealer = function(action, callback, dir = "up") {
    if (action === "show") {
      space.revealer.style.backgroundColor =
        color[Math.floor(Math.random() * Math.floor(color.length))];
    }
    anime({
      targets: space.revealer,
      duration: 1000,
      easing: action === "show" ? "easeInOutQuint" : "easeOutQuint",
      translateX: action === "show" ? "-100%" : dir === "up" ? "-200%" : "0%",
      complete: callback
    });
  };

  space.toggle = function(action) {
    if (isAnimating) return;
    isAnimating = true;
    let isHide = action === "show";
    space.revealer.style.display = "block";
    if (!isHide) {
      space.fullviewItems[space.current].style.zIndex = 0;
    }
    space.toggleRevealer("show", function() {
      space.fullviewItems[space.current].style.opacity = isHide ? 1 : 0;
      space.fullview.style.opacity = isHide ? 1 : 0;
      space.fullview.style.pointerEvents = isHide ? "auto" : "none";
      space.toggleRevealer(
        "hide",
        function() {
          space.revealer.style.display = "none";
          if (isHide) {
            space.fullviewItems[space.current].style.zIndex = 10;
          }
          isAnimating = false;
        },
        isHide ? "up" : "down"
      );
    });
    space.toggleMoreBtn(action);
  };

  space.initEvents = function() {
    for (let i = 0; i < space.btns.length; i++) {
      space.btns[i].addEventListener("click", function() {
        space.current = i;
        space.toggle("show");
      });
    }
    space.moreBtn.addEventListener("click", function() {
      space.toggle("hide");
    });
  };
  return space;
};

space.initFooter = function() {
  document.getElementById("now-year").textContent = new Date().getFullYear();
};

space.initHitokoto = function() {
  $ajax({
    url: "https://api.lwl12.com/hitokoto/v1",
    data: {
      encode: "realjson"
    },
    type: "GET",
    dataType: "json",
    success: function(response) {
      let text = response.text;
      let source = response.author;
      if (source === "") {
        source = response.source;
      }
      if (source !== "") {
        source = " - 「" + source + "」";
      }
      document.getElementsByClassName("hitokoto")[0].textContent =
        text + source;
    },
    error: function(status) {
      console.log("状态码为" + status);
    }
  });
};

space.initArchives = function() {
  $ajax({
    url: "https://blog.ixk.me/wp-json/wp/v2/posts",
    data: {
      per_page: 10,
      page: 1
    },
    type: "GET",
    dataType: "json",
    success: function(archives) {
      let ul = document.createElement("ul");
      for (let i = 0; i < archives.length; i++) {
        let post = archives[i];
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.href = post.link;
        link.innerHTML = post.title.rendered;
        let date = document.createElement("span");
        date.textContent = post.date.split("T")[0];
        li.append(link);
        li.append(date);
        ul.append(li);
      }
      document.getElementById("blog-archives").append(ul);
    },
    error: function(status) {
      console.log("状态码为" + status);
    }
  });
};

space.initFriends = function() {
  $ajax({
    url: "https://blog.ixk.me/wp-json/links/v1/all",
    type: "GET",
    dataType: "json",
    success: function(links) {
      let ul = document.createElement("ul");
      for (let i = 0; i < links.length; i++) {
        let link = links[i];
        let li = document.createElement("li");
        let name = document.createElement("a");
        name.innerHTML = link.link_name;
        name.href = link.link_url;
        let note = document.createElement("span");
        note.innerHTML = link.link_notes;
        li.append(name);
        li.append(note);
        ul.append(li);
      }
      document.getElementById("friends-list").children[0].append(ul);
    },
    error: function(status) {
      console.log("状态码为" + status);
    }
  });
};

var item = space.initSpace([
  "#8779d2",
  "#79a5d2",
  "#79d2bd",
  "#d2a279",
  "#119DB2",
  "#F5C89C",
  "#59A3BE",
  "#9DC1D9",
  "#BEE0EA"
]);
item.initEvents();
space.initFooter();

window.addEventListener("load", function() {
  space.initHitokoto();
  space.initArchives();
  space.initFriends();
});
