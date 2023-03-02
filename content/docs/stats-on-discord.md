+++
title = "stats-on-discord"
date = 2023-03-02
description = "Documentation for stats-on-discord plugin"

[extra]
github = "https://github.com/wzid/stats-on-discord"
+++

# Table of Contents
- [Installation](#installation)
  - [Creating the bot](#creating-the-bot)
  - [Setting Discord Embed Channel](#setting-discord-embed-channel)
- [Configuration](#configuration)

<br>

# Showcase

<img class="showcase-img" src="/images/show1.png"> 
<img class="showcase-img" src="/images/show2.png">

<br>

# Installation

1. Download the [latest release](https://github.com/wzid/stats-on-discord/releases/)

2. Put `stats-on-discord-VERSION_NUMBER.jar` in your server's `plugins` folder and restart your server. A folder named `stats-on-discord` will be generated with the `bot-properties.yml` file.

<br>

## Creating the Bot
Before we can edit the configuration file we need to create a Discord bot

> Create an application at [https://discord.com/developers/applications](https://discord.com/developers/applications) by pressing `New Application`

Select the `Bot` tab and then press the `Add Bot` button 

<img src="/images/create-bot.png">

Give your bot a cool name then copy the token using the `Copy` button

<img src="/images/copy-token.png">

Paste the token into `bot-properties.yml`

```yml
bot:
  token: MTA4MDY4NTY4NDc5ODUyOTY1Nw.GGzpwT.KIXGmZFN7fda_raEUxvJTOqzbaOoYzQUzXQHjI
```

We need to invite the bot to your guild now.

Select the `OAuth2` tab and then select `URL Generator`

<img src="/images/link-gen.png" style="width: 25%; height: 25%;">

<br>

After that, find and select `bot` from the Scopes and `Administrator` from the Bot Permissions

<img src="/images/perms.png">

Now scroll down and copy the link into your browser and invite the bot into your server

<br>

## Setting Discord Embed Channel

Go to your discord settings, select the `Advanced` tab and enable `Developer Mode`

<img src="/images/dev-mode.png">

<br>

Now find the channel that you want the statistics to be displayed in and **right click** on that channel. Then click `Copy ID`

<img src="/images/copy-id.png" style="width: 25%; height: 25%;">

Paste the channel id into `bot-properties.yml`

```yml
discord:
  embed-color: #dd447f
  stats:
    channel-id: 1077358024093610164
```

If you restart your server then the embeds should be displayed in the correct channel

<br>

# Configuration

> **❗** Remember to restart the server after changing a setting

For now there are only 4 types of statistics the bot can display. You can change any of the following values in the `bot-properties.yml` file to display them

| Stat Name | Description |
|-----------|-------------|
| play-time | How long the player has played on the server | 
| deaths | How many times the player has died |
| damage-dealt | The amount of damage, in hearts, a player has dealt |
| jumps | The amount of times a player has jumped |

Any other settings can be found below

| Name | Description |
|------|-------------|
| embed-color | The color for each embed the bot sends and updates |

