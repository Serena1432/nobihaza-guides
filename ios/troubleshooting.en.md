---
layout: default
title: Troubleshooting and Tips
parent: iOS
permalink: /ios/troubleshooting
lang: en
nav_order: 3
---

# Troubleshooting and Tips
{: .no_toc }

{: .note }
> I am not a frequent gamer on iOS, so there may be some errors that I am not aware of and have not included here. You can [contribute new error information](../../contribute) if you have any.

## Table of Contents
{: .no_toc }

1. TOC
{:toc}

## General

### Unable to Verify App Integrity

The certificate used to sign the application you are installing is invalid or has been revoked. Please return to the [Prerequisites](./prerequisities) section and reinstall from the beginning.

### Untrusted Developer

* Go to iOS **Settings**, tap **General** -> **VPN & Device Management**. Tap on the items in the **Developer App** and **Enterprise App** sections.
* Tap the **Trust (some name)** button for each one. For iOS 18, you need to restart your phone each time you trust an application.

### App crashes immediately after launch

There are many reasons for this:

* The application you downloaded is corrupted.
* You have not signed the application, or the certificate you used to sign the application has been revoked.
* You installed using TrollStore, but you updated your device's operating system without reinstalling via Persistent Helper.
* You installed using AppSync after jailbreaking your device, but you have restarted the device and forgotten to re-jailbreak.

You need to go back to the [Prerequisites](./prerequisities) section and reinstall from the beginning.

## RPG Maker 2000/2003 (EasyRPG + RetroArch)

### Failed to load content

* You are using a password-protected compressed file. Please extract the game and then try again.
* If you have already extracted it but still encounter the error, try downloading and re-extracting the game one more time.

### Other errors

See the [EasyRPG](../../miscellaneous/easyrpg) section.