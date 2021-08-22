import React from "react";
import {
  Button,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  Comments,
  GithubOne,
  Home,
  NotebookOne,
  Rss,
  Star,
  User,
} from "@icon-park/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { header, home } from "../../config";
import Head from "next/head";

const Header: React.FC = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        {children}
        <link rel="shortcut icon" href={home.avatar} />
        <link rel="bookmark" type="image/x-icon" href={home.avatar} />
      </Head>
      <HStack justify="flex-end" align="center" py={4} spacing={1}>
        {router.pathname !== "" && router.pathname !== "/" && (
          <RButton
            label="Home"
            href="/"
            icon={<Home theme="outline" size="1.15rem" />}
          />
        )}
        <RButton
          label="Blog"
          href={header.blog}
          icon={<NotebookOne theme="outline" size="1.15rem" />}
        />
        <RButton
          label="About"
          href={header.about}
          icon={<User theme="outline" size="1.15rem" />}
        />
        <RButton
          label="Projects"
          href={header.projects}
          icon={<Star theme="outline" size="1.15rem" />}
        />
        <RButton
          label="Github"
          href={header.github}
          icon={<GithubOne theme="outline" size="1.15rem" />}
          alwaysIcon
        />
        <RButton
          label="RSS"
          href={header.rss}
          icon={<Rss theme="outline" size="1.15rem" />}
          alwaysIcon
        />
        <RButton
          label="Guestbook"
          href={header.guestbook}
          icon={<Comments theme="outline" size="1.15rem" />}
          alwaysIcon
        />
      </HStack>
    </>
  );
};

type RButtonProps = {
  icon?: React.ReactElement;
  alwaysIcon?: boolean | undefined;
  label: string;
  href: string;
};

const RButton: React.FC<RButtonProps> = ({ label, href, icon, alwaysIcon }) => {
  const mobile = useBreakpointValue({ base: true, md: false });
  const innerLink = href.startsWith("/");
  const Root = innerLink ? Link : React.Fragment;
  return (
    // @ts-ignore
    <Root {...(innerLink ? { href } : {})}>
      {alwaysIcon || (icon && mobile) ? (
        <IconButton
          as="a"
          title={label}
          aria-label={label}
          variant="ghost"
          size="sm"
          icon={icon}
          href={href}
        />
      ) : (
        <Button as="a" variant="ghost" size="sm" href={href}>
          {label}
        </Button>
      )}
    </Root>
  );
};

export default Header;
