using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AllYourBase.Startup))]
namespace AllYourBase
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
