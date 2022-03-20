v1alpha1.extension_repo(name='tilt-extensions', url='https://github.com/syfxlin/tilt-extensions')
v1alpha1.extension(name='deployment', repo_name='tilt-extensions', repo_path='deployment')
v1alpha1.extension(name='nodejs_template', repo_name='tilt-extensions', repo_path='nodejs_template')
load('ext://deployment', 'deployment')
load('ext://nodejs_template', 'nodejs_static_template')

allow_k8s_contexts(k8s_context())
deployment(
    name='home',
    image='cr.ixk.me/syfxlin/home',
    namespace='production',
    registry_secret='cr-ixk-me',
    dockerfile_contents=nodejs_static_template(nginx_root='out'),
    ports=[80],
    ingress=['ixk.me', 'www.ixk.me'],
    ingress_tls=True,
    ingress_config={
        'nginx.ingress.kubernetes.io/from-to-www-redirect': 'true'
    }
)
