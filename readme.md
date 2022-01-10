[//]: # (header-start)

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
<h1 align="center">
	Axway Amplify End-of-Life Announcement
</h1>
<h2 align="center">
	👇 &nbsp; See notes below  &nbsp; 👇
</h2>	
</a>

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</p>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		🪦 &nbsp; RIP Axway Amplify Cloud Services (2012 - 2022)
	</p>
</a>
<hr>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h4 align="center">
🛑 &nbsp;&nbsp; All products affected by the announcements will not be supported by Axway effective their EOL dates in 2022.
</h4>

<h4 align="center">
Some Open-Source versions of Axway products will live on after End-of-Life (EOL) Axway Amplify product announcements.  However, some products are closed-source and will NOT continue after the shut down in 2022.  
	</h4>
</a>
<p>&nbsp;</p>

> 👉 &nbsp;&nbsp; Stay tuned for more info as plans are being made to save the Titanium project and move it under the control of a independent group of developers.

<p>&nbsp;</p>
<hr>
<p>&nbsp;</p>
<p>&nbsp;</p>

[//]: # (header-end)

# @titanium/plugin-alloy-local

![https://www.npmjs.com/package/@titanium/plugin-alloy-local](https://img.shields.io/npm/v/@titanium/plugin-alloy-local.png)

> Titanium Mobile plugin to use locally installed Alloy (if available)


* [📝 Description](#-description)
* [🚀 Getting Started](#-getting-started)
* [🔗 Related Links](#-related-links)
* [📚 Learn More](#-learn-more)
* [📣 Feedback](#-feedback)
* [©️ Legal](#️-legal)

## 📝 Description

Here are how things currently work by default:

- [Titanium Mobile](https://www.npmjs.com/package/titanium) will use the globally installed [Alloy](https://www.npmjs.com/package/alloy) package when compiling mobile apps.
- [Appcelerator](https://www.npmjs.com/package/appcelerator) bundles a version of [Alloy](https://www.npmjs.com/package/alloy) with it and will use that when compiling mobile apps.

The goal and purpose of this plugin is to allow you to install a specific version of [Alloy](https://www.npmjs.com/package/alloy) locally and to be able to have Titanium and/or Appcelerator use this when compiling your app.

## 🚀 Getting Started

> NOTE:  Before installing this plugin, make sure you have a `package.json` file in the root of your project.   If you don't, you can just run the following in the project root directory and it will create one for you:

```
npm init --yes
```

To install this plugin, run the following in the project root directory:

```
npm install --save-dev @titanium/plugin-alloy-local
```

This will install the npm package as well as run a post-install script that will also create the Titanium plugin for you.

> Don't worry about having this plugin installed if you do not have Alloy installed locally.  If the plugin cannot find Alloy locally, it will fallback to the default location depending on your tool (see above).

## 🔗 Related Links

- [Titanium Mobile](https://www.npmjs.com/package/titanium) - Open-source tool for building powerful, cross-platform native apps with JavaScript.
- [Alloy](https://www.npmjs.com/package/alloy) - MVC framework built on top of Titanium Mobile.
- [Appcelerator](https://www.npmjs.com/package/appcelerator) - Installer for the Appcelerator Platform tool

## 📚 Learn More

- [Axway Developer Portal](https://developer.axway.com)

## 📣 Feedback

Have an idea or a comment?  [Join in the conversation here](https://github.com/brentonhouse/titanium-plugin-alloy-local/issues)! 

## ©️ Legal

Alloy is developed by Appcelerator and the community and is Copyright © 2012-Present by Appcelerator, Inc. All Rights Reserved.

Alloy is made available under the Apache Public License, version 2. See their license file for more information.

Appcelerator is a registered trademark of Appcelerator, Inc. Titanium is a registered trademark of Appcelerator, Inc. Please see the LEGAL information about using trademarks, privacy policy, terms of usage and other legal information at http://www.appcelerator.com/legal.