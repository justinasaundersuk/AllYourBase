﻿using System.Web;
using System.Web.Optimization;

namespace AllYourBase
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/Scripts/isotope").Include(
                        "~/Scripts/isotope.pkgd.min.js"
            ));

            bundles.Add(new ScriptBundle("~/Scripts/dotdotdot").Include(
                        "~/Scripts/jquery.dotdotdot.min.js"
            ));

            bundles.Add(new StyleBundle("~/css/bootstrap").Include(
                        "~/Content/css/vendors/bootstrap.css"));

            bundles.Add(new StyleBundle("~/css/styles").Include(
                        "~/Content/css/base.css"));
        }
    }
}
