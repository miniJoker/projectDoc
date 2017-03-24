using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(projectD.Startup))]
namespace projectD
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
