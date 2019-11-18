import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  constructor() { }

  commands = [
    {
      "name": "groups",
      "format": null,
      "aliases": [
        "list-groups",
        "show-groups",
        "listgroups",
        "showgroups"
      ],
      "description": "Lists all command groups.",
      "examples": null,
      "args": null
    },
    {
      "name": "enable",
      "format": "<command/group>",
      "aliases": [
        "enable-command",
        "cmd-on",
        "command-on",
        "enablecommand",
        "cmdon",
        "commandon"
      ],
      "description": "Enables a command or command group.",
      "examples": [
        "enable util",
        "enable Utility",
        "enable prefix"
      ],
      "args": [
        "cmdOrGrp"
      ]
    },
    {
      "name": "disable",
      "format": "<command/group>",
      "aliases": [
        "disable-command",
        "cmd-off",
        "command-off",
        "disablecommand",
        "cmdoff",
        "commandoff"
      ],
      "description": "Disables a command or command group.",
      "examples": [
        "disable util",
        "disable Utility",
        "disable prefix"
      ],
      "args": [
        "cmdOrGrp"
      ]
    },
    {
      "name": "reload",
      "format": "<command/group>",
      "aliases": [
        "reload-command",
        "reloadcommand"
      ],
      "description": "Reloads a command or command group.",
      "examples": [
        "reload some-command"
      ],
      "args": [
        "cmdOrGrp"
      ]
    },
    {
      "name": "load",
      "format": "<command>",
      "aliases": [
        "load-command",
        "loadcommand"
      ],
      "description": "Loads a new command.",
      "examples": [
        "load some-command"
      ],
      "args": [
        "command"
      ]
    },
    {
      "name": "unload",
      "format": "<command>",
      "aliases": [
        "unload-command",
        "unloadcommand"
      ],
      "description": "Unloads a command.",
      "examples": [
        "unload some-command"
      ],
      "args": [
        "command"
      ]
    }
  ];

  companies = [
    {
      "name": "%com",
      "format": "[Company]",
      "aliases": [
        "%c"
      ],
      "description": "Percent of company kill commendation completed.\n`%com Spartan Company`",
      "examples": [
        "%com Spartan Company"
      ],
      "args": [
        "Company"
      ]
    },
    {
      "name": "members",
      "format": "[Company]",
      "aliases": [],
      "description": "List all company members.\n`!members Spartan Company`",
      "examples": [
        "members Spartan Company"
      ],
      "args": [
        "Company"
      ]
    },
    {
      "name": "setco",
      "format": "<Company>",
      "aliases": [
        "sc"
      ],
      "description": " Save your Spartan Company to my database.\n`!setco Spartan Company`",
      "examples": [
        "setco Company"
      ],
      "args": [
        "Company"
      ]
    }
  ];
  
  general = [
    {
      "name": "1v1",
      "format": "[text]",
      "aliases": [
        "onevone"
      ],
      "description": "Compare stats with any two Halo players",
      "examples": [
        "!1v1 Gamertag vs Gamertag"
      ],
      "args": [
        "text"
      ]
    },
    {
      "name": "covco",
      "format": "[text]",
      "aliases": [
        "cvc"
      ],
      "description": "Compare stats with any two Spartan Companies.",
      "examples": [
        "\n```!covco Spartan Company vs Spartan Company```"
      ],
      "args": [
        "text"
      ]
    },
    {
      "name": "leader",
      "format": "<text>",
      "aliases": [
        "l"
      ],
      "description": "Halo's Top Leaders 1-10 players of Arena Ranked playlists.",
      "examples": [
        "leader Slayer",
        "leader Team Arena"
      ],
      "args": [
        "text"
      ]
    },
    {
      "name": "lfg",
      "format": "<Game Type> <Playlist> <Player Slots> <Message> <Global>",
      "aliases": [
        "lfg",
        "looking for group",
        "looking for game"
      ],
      "description": "Begins the request process to find gamers.",
      "examples": [
        "lfg Social BTB 8",
        "LFG"
      ],
      "args": [
        "gametype",
        "playlist",
        "slots",
        "message",
        "global"
      ]
    },
    {
      "name": "listcompanycoms",
      "format": null,
      "aliases": [
        "lcc",
        "listcompanycom",
        "list company coms"
      ],
      "description": "List all company commendations",
      "examples": [
        "listcompanycoms"
      ],
      "args": null
    },
    {
      "name": "listcoms",
      "format": null,
      "aliases": [
        "lc",
        "listcom",
        "list com"
      ],
      "description": "List all personal commendations",
      "examples": [
        "listcoms"
      ],
      "args": null
    },
    {
      "name": "lore",
      "format": "<text>",
      "aliases": [
        "halo-lore",
        "halolore"
      ],
      "description": "Halo lore brought to you by Halopedia.org",
      "examples": [
        "lore Master Chief"
      ],
      "args": [
        "text"
      ]
    }
  ];

  halowars2s = [
    {
      "name": "hw2stats",
      "format": "[Gamertag]",
      "aliases": [
        "hw2stat",
        "halowars2stats",
        "halowars2stat"
      ],
      "description": "Get players get HW2 stats.\n`!hw2xp gamertag`",
      "examples": [
        "hw2stats gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "hw2xp",
      "format": "[Gamertag]",
      "aliases": [
        "hw2xp"
      ],
      "description": "Get players get HW2 stats.\n`!hw2xp gamertag`",
      "examples": [
        "hw2xp gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    }
  ];

  utilities = [
    {
      "name": "app",
      "format": null,
      "aliases": [
        "applications"
      ],
      "description": "Get the app for iOS or Android",
      "examples": [
        "app"
      ],
      "args": null
    },
    {
      "name": "avatar",
      "format": "[user]",
      "aliases": [
        "ava"
      ],
      "description": "Gets a user's avatar.",
      "examples": null,
      "args": [
        "user"
      ]
    },
    {
      "name": "desc",
      "format": "<text>",
      "aliases": [
        "descriptions"
      ],
      "description": "Descriptions for all commendations",
      "examples": [
        "descweapon name"
      ],
      "args": [
        "text"
      ]
    },
    {
      "name": "donate",
      "format": null,
      "aliases": [
        "donations",
        "patreon"
      ],
      "description": "Become one of the elite in your server. Help a worthy cause",
      "examples": [
        "donate"
      ],
      "args": null
    },
    {
      "name": "guild",
      "format": null,
      "aliases": [
        "server"
      ],
      "description": "Guild data..",
      "examples": [
        "guild"
      ],
      "args": null
    },
    {
      "name": "help",
      "format": "[command]",
      "aliases": [
        "commands",
        "command"
      ],
      "description": "Replies with a Message for helping the user.",
      "examples": [
        "help",
        "help command_name"
      ],
      "args": [
        "command"
      ]
    },
    {
      "name": "info",
      "format": null,
      "aliases": [
        "information"
      ],
      "description": "Current Halo dBot stats.\n[Go to the offical Halo dBot Site](https://halodbot.com)\n[Become a Patron](https://www.patreon.com/may_hamn)",
      "examples": [
        "info"
      ],
      "args": null
    },
    {
      "name": "join",
      "format": null,
      "aliases": [
        "joining"
      ],
      "description": "Invite Halo dBot to your Discord server.",
      "examples": [
        "join"
      ],
      "args": null
    },
    {
      "name": "list-emoji",
      "format": null,
      "aliases": [
        "le",
        "list-emoji",
        "listemoji",
        "listemoji"
      ],
      "description": "List all emoji's in a server",
      "examples": null,
      "args": null
    },
    {
      "name": "memory",
      "format": null,
      "aliases": [
        "mem",
        "ram"
      ],
      "description": "Owner Only, check the memory usage of dbot",
      "examples": [
        "!memory"
      ],
      "args": null
    },
    {
      "name": "module",
      "format": "<module>",
      "aliases": [
        "modu"
      ],
      "description": "Gets a list of commands inside a module.",
      "examples": [
        "module util",
        "module fun"
      ],
      "args": [
        "module"
      ]
    },
    {
      "name": "modules",
      "format": null,
      "aliases": [
        "mdls"
      ],
      "description": "Returns a list of modules.",
      "examples": [
        "modules"
      ],
      "args": null
    },
    {
      "name": "playing",
      "format": "<text>",
      "aliases": [
        "watching"
      ],
      "description": "Update the Playing: message on Halo dBot. Only available to my creator <@175813708088344577> ;)",
      "examples": [
        "playing"
      ],
      "args": [
        "text"
      ]
    },
    {
      "name": "remindme",
      "format": "<reminder>",
      "aliases": [
        "remind"
      ],
      "description": "Reminds you of something.",
      "examples": null,
      "args": [
        "remind"
      ]
    },
    {
      "name": "reply",
      "format": null,
      "aliases": [
        "rply"
      ],
      "description": "Replies with a Message.",
      "examples": [
        "reply"
      ],
      "args": null
    },
    {
      "name": "search",
      "format": "<search>",
      "aliases": [
        "s"
      ],
      "description": "Searches google.",
      "examples": null,
      "args": [
        "search"
      ]
    },
    {
      "name": "shorten",
      "format": "<url>",
      "aliases": [
        "sht"
      ],
      "description": "Shortens a URL.",
      "examples": null,
      "args": [
        "url"
      ]
    },
    {
      "name": "suggest",
      "format": "<suggestion>",
      "aliases": [
        "sgst"
      ],
      "description": "Sends a suggestion to a channel called #suggestions",
      "examples": null,
      "args": [
        "suggestion"
      ]
    },
    {
      "name": "support",
      "format": null,
      "aliases": [
        "sprt"
      ],
      "description": "Got issues, questions, or ideas? We have a very knowledgeable team ready to help you.",
      "examples": [
        "support"
      ],
      "args": null
    },
    {
      "name": "tip",
      "format": null,
      "aliases": [
        "hint"
      ],
      "description": "Get a tip for playing Halo 5.",
      "examples": [
        "tip",
        "hint"
      ],
      "args": null
    },
    {
      "name": "top-commands",
      "format": null,
      "aliases": [
        "tc",
        "topcommands"
      ],
      "description": "Simple list of the most used commands",
      "examples": [
        "top-commands"
      ],
      "args": null
    },
    {
      "name": "top-guilds",
      "format": null,
      "aliases": [
        "tg",
        "top-guild",
        "topguild",
        "topguilds",
        "topguild"
      ],
      "description": "List of guilds with the most users",
      "examples": [
        "top-guilds"
      ],
      "args": null
    },
    {
      "name": "prefix",
      "format": "[prefix/\"default\"/\"none\"]",
      "aliases": [],
      "description": "Shows or sets the command prefix.",
      "examples": [
        "prefix",
        "prefix -",
        "prefix omg!",
        "prefix default",
        "prefix none"
      ],
      "args": [
        "prefix"
      ]
    },
    {
      "name": "ping",
      "format": null,
      "aliases": [],
      "description": "Checks the bot's ping to the Discord server.",
      "examples": null,
      "args": null
    }
  ];

  fun = [
    {
      "name": "8ball",
      "format": null,
      "aliases": [],
      "description": "Replies with a Message from Exuberant Wittness.",
      "examples": [
        "8ball"
      ],
      "args": null
    },
    {
      "name": "quote",
      "format": null,
      "aliases": [
        "q"
      ],
      "description": "Quotes from a mysterious source.",
      "examples": [
        "quote"
      ],
      "args": null
    },
    {
      "name": "serverleader",
      "format": null,
      "aliases": [
        "sl",
        "serverleaders",
        "server leaders"
      ],
      "description": "Display the Server Leaderboard for the !trivia.",
      "examples": [
        "serverleader"
      ],
      "args": null
    },
    {
      "name": "tbag",
      "format": null,
      "aliases": [],
      "description": "Example of common halo sportsmanship",
      "examples": [
        "tbag"
      ],
      "args": null
    },
    {
      "name": "trivia",
      "format": null,
      "aliases": [
        "t",
        "game"
      ],
      "description": "SHALL WE PLAY A GAME?",
      "examples": [
        "trivia"
      ],
      "args": null
    }
  ];

  premium = [
    {
      "name": "com",
      "format": "[Company]",
      "aliases": [
        "company"
      ],
      "description": "Company kill commendation progress.\n`!com Spartan Company`",
      "examples": [
        "com Spartan Company"
      ],
      "args": [
        "Company"
      ]
    },
    {
      "name": "mcc-stats",
      "format": "[Gamertag]",
      "aliases": [
        "mcc",
        "mccstats"
      ],
      "description": "Get Master Cheif Collection stats`",
      "examples": [
        "mcc-stats [Gamertag]"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "membersdate",
      "format": "[Company]",
      "aliases": [
        "md"
      ],
      "description": "List all company members.",
      "examples": [
        "membersDate Spartan Company"
      ],
      "args": [
        "Company"
      ]
    },
    {
      "name": "membersleader",
      "format": "[Company]",
      "aliases": [
        "ml"
      ],
      "description": "Company leaders 1-10 players of Arena Ranked playlists.\n`!membersleader Spartan Company`",
      "examples": [
        "membersleader Spartan Company",
        "membersleader Spartan Company {Slayer}"
      ],
      "args": [
        "Company"
      ]
    },
    {
      "name": "membersprogress",
      "format": "<Commendation>",
      "aliases": [
        "mp",
        "member-progress",
        "memberprogress"
      ],
      "description": "Spartan Company Member commendation progress for individual searches.`",
      "examples": [
        "membersprogress Can’t We Get Along?",
        "mp Sting Like A Bee"
      ],
      "args": [
        "Commendation"
      ]
    },
    {
      "name": "trackmembers",
      "format": "[Gamertag]",
      "aliases": [
        "tm",
        "trackmember"
      ],
      "description": "Spartan Company Member commendation progress tracker.`",
      "examples": null,
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "xbox-live",
      "format": "[Gamertag]",
      "aliases": [
        "xbl",
        "xbox",
        "xboxlive"
      ],
      "description": "Get xbox live profile info`",
      "examples": [
        "xbox-live [Gamertag]"
      ],
      "args": [
        "Gamertag"
      ]
    }
  ];

  personal = [
    {
      "name": "arena",
      "format": "[Gamertag]",
      "aliases": [
        "a"
      ],
      "description": "Get players get arena stats.\n`!arena gamertag`",
      "examples": [
        "arena gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "background",
      "format": "[Gamertag]",
      "aliases": [
        "bg",
        "back ground",
        "customs"
      ],
      "description": "Get Custom games played.\n `!background gamertag` ",
      "examples": [
        "background gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "campaign",
      "format": "[Gamertag]",
      "aliases": [
        "c"
      ],
      "description": "Get gamesplayed in all playlist.\n `!campaign gamertag` ",
      "examples": [
        "campaign gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "csr",
      "format": "[Gamertag]",
      "aliases": [
        "competetivespartanrank"
      ],
      "description": "Get players CSR\n`!csr gamertag`",
      "examples": [
        "csr gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "emblem",
      "format": "[Gamertag]",
      "aliases": [
        "icon"
      ],
      "description": "Get players Halo 5 emblem\n `!emblem gamertag",
      "examples": [
        "emblem gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "gamehistory",
      "format": "[query]",
      "aliases": [
        "gh",
        "game history"
      ],
      "description": "This will return game stats, players, and round results in arena, warzone, custom matches\n`!gamehistory Gamertag`",
      "examples": [
        "gamehistory gamertag {arena}",
        "gamehistory gamertag {warzone}",
        "gamehistory gamertag {custom}"
      ],
      "args": [
        "query"
      ]
    },
    {
      "name": "gamesplayed",
      "format": "[Gamertag]",
      "aliases": [
        "gp",
        "games played"
      ],
      "description": "Get gamesplayed in all playlist.\n `!gamesplayed gamertag`",
      "examples": [
        "gamesplayed gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "halo",
      "format": "[Gamertag]",
      "aliases": [
        "h"
      ],
      "description": "Halo 5 Spartan Statistics",
      "examples": [
        "Halo Gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "image",
      "format": "[Gamertag]",
      "aliases": [
        "spartan",
        "png"
      ],
      "description": "Get players Halo 5 image\n `!image gamertag`",
      "examples": [
        "image gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "kd",
      "format": "[Gamertag]",
      "aliases": [
        "killdeath"
      ],
      "description": "Get players K/D.\n `!kd gamertag` ",
      "examples": [
        "kd gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "kda",
      "format": "[Gamertag]",
      "aliases": [
        "killdeathaverage"
      ],
      "description": "Get players KDA.\n `!kda gamertag` ",
      "examples": [
        "kda gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "medals",
      "format": "[query]",
      "aliases": [
        "m",
        "medal"
      ],
      "description": "Get players Halo 5 medals\n `!medals gamertag {keyword}`",
      "examples": [
        "medals gamertag"
      ],
      "args": [
        "query"
      ]
    },
    {
      "name": "myrank",
      "format": "[Gamertag]",
      "aliases": [
        "ranks",
        "rank",
        "myranks"
      ],
      "description": "Get players current season ranks\n `!myrank gamertag` ",
      "examples": [
        "myrank gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "playtime",
      "format": "[Gamertag]",
      "aliases": [
        "pt",
        "play time"
      ],
      "description": "Get playtime in all playlist.\n `!playtime gamertag` ",
      "examples": [
        "playtime gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "profile",
      "format": "[Gamertag]",
      "aliases": [
        "p"
      ],
      "description": "Display your Halo 5 Nameplate.",
      "examples": [
        "profile gamertag",
        "p gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "recentgames",
      "format": "[Gamertag]",
      "aliases": [
        "rg",
        "recent games"
      ],
      "description": "Get recent games streak in all arena.\n `!recentgames gamertag` ",
      "examples": [
        "recentgames gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "setbg",
      "format": "<Color>",
      "aliases": [
        "sb",
        "setbackground"
      ],
      "description": "Save a Color to my database, options are *Black, Brown, Blue, Green, Grey, Orange, Pink, Purple, Red, Sky, White, Yellow*",
      "examples": [
        "setbg color"
      ],
      "args": [
        "Color"
      ]
    },
    {
      "name": "setgt",
      "format": "<Gamertag>",
      "aliases": [
        "sg"
      ],
      "description": "Save your `Gamertag` to my database.",
      "examples": [
        "setgt gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "stats",
      "format": "[Gamertag]",
      "aliases": [
        "statistics"
      ],
      "description": "Get players getStats.\n `!stats gamertag` ",
      "examples": [
        "stats gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "warzone",
      "format": "[Gamertag]",
      "aliases": [
        "wz"
      ],
      "description": "Get players warzone stats.\n `!warzone gamertag` ",
      "examples": [
        "warzone gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    },
    {
      "name": "weapon",
      "format": "[query]",
      "aliases": [
        "w",
        "weapons"
      ],
      "description": "Get the top ten weapons used or get detailed weapon stats for arena only\n`!weapon gamertag {weapon_name}`",
      "examples": [
        "weapon gamertag"
      ],
      "args": [
        "query"
      ]
    },
    {
      "name": "xp",
      "format": "[Gamertag]",
      "aliases": [
        "x",
        "sr",
        "spartanrank"
      ],
      "description": "Get players XP\n `!xp gamertag` ",
      "examples": [
        "xp gamertag"
      ],
      "args": [
        "Gamertag"
      ]
    }
  ];

  ngOnInit() {
    
  }

}
