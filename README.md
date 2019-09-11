# openampproject.org Static Jekyll Website

This is the git repository for static Jekyll-based openampproject.org website (https://openampproject.org/).

Hosted in this repo are the markdown content files associated with the website. Feel free to [submit a
PR](https://github.com/ArmNNWebsite/website/pulls) / [Issue](https://github.com/ArmNNWebsite/website/issues/new) if there is anything you would like to change.

This static Jekyll site is using the [`jumbo-jekyll-theme`](https://github.com/linaro-marketing/jumbo-jekyll-theme).

Please take a moment to review the guides on the [theme's GitHub wiki](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki).

*****

## Contributing

To make it easier to contribute to the content, Linaro provides a couple of Docker containers for building and checking the site. All you need is Docker installed on your computer and enough RAM and disc space.

To build the site:

```
cd <git repository directory>
./build-site.sh
```

To build the site and then serve it so that you can check your contribution appears:

```
cd <git repository directory>
JEKYLLACTION="serve" ./build-site.sh
```

To check that your contribution doesn't include any broken links:

```

cd <built web site directory>
../check-links.sh
```

The built web site directory will be `staging.openampproject.org` unless you set `JEKYLLENV=production` before building the site, in which case the directory will be `production.openampproject.org`.

For more information, please see the [build container wiki](https://github.com/linaro-its/jekyll-build-container/wiki) and the [link checker wiki](https://github.com/linaro-its/jekyll-link-checker/wiki).

*****

## Website Jekyll Theme (jumbo-jekyll-theme)

This website uses the `jumbo-jekyll-theme` developed as an open source project by Linaro to ensure content-driven websites are as lightweight as possible. Head over to the [theme repo] to find out more. Here are a few examples of websites using the theme:

- [96Boards.ai](https://www.96boards.ai)
- [96Boards](https://www.96boards.org)
- [DeviceTree.org](https://www.devicetree.org)
- [Linaro Connect](https://connect.linaro.org)
- [Linaro](https://www.linaro.org)
- [OP-TEE](https://www.op-tee.org)
- [TrustedFirmware](https://www.trustedfirmware.org)


## Adding Redirects to the Static site

We are using [edge-rewrite](https://github.com/marksteele/edge-rewrite) running on Lambda@Edge for redirects. The redirects must be added to the `_data/routingrules.json` file following the syntax rules [here](https://github.com/marksteele/edge-rewrite). Some example rewrite directives:

```mod_rewrite
^/oldpath/(\\d*)/(.*)$ /newpath/$2/$1 [L]
!^/oldpath.*$ http://www.example.com [R=302,L,NC]
^/topsecret.*$ [F,L]
^/deadlink.*$ [G]
^/foo$ /bar [H=^baz\.com$]
```

**Note:** These redirects are not evaluated by the link checker until the site build process has started. For internal broken links, please update the referencing pages so that the links are no longer broken: **do not** use redirects for internal broken links.

## Known Issues

### Image file names

Due to the way product images are included, images should not include spaces in the filename otherwise it may not be rendered on the website as expected.
