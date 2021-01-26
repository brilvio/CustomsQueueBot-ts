/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { Message } from 'discord.js';
import { ICommand, IParameters } from 'models/commands';

export const moduleName = 'Mods';
export class Active implements ICommand {
  command: string = 'active';
  alias: string[] = ['status'];
  summary: string =
    ": Change a player's active status. Use the command to change a player's active status between active <-> inactive\nex: +status 123456789 or +active @playername";
  parameters: IParameters[] = [{ name: 'user', description: 'User name or UserId that you want to toggle the status' }];
  execute(message: Message, args?: any[]): Promise<void> {
    return null;
    /* if (!Caches.IsOpen.isOpen) {
                await Context.Channel.SendMessageAsync("There is no open queue.");
                return;
     }
      IUser user;
      if (args[0] != "")  { // If an argument was passed.

                try // check if argument is a ulong userID
                {
                    ulong _user = ulong.Parse(userID);
                    user = Context.Guild.GetUser(_user);
                } catch { // Parse as an @mention
                    user = Context.Guild.GetUser(Context.Message.MentionedUsers.First().Id);
                }
            }  else  {// If no argument, user is the one who called the command.
                user = Context.Message.Author;
            }

            foreach (Player player in PlayerList.Playerlist) {
                if (player.DiscordID == user.Id) {
                    if (player.IsActive) {
                        player.IsActive = false;
                        PlayerList.PlayerlistDB[PlayerList.PlayerlistDB.IndexOf(player)].IsActive = false;
                        await Context.Channel.SendMessageAsync($"Player {player.Nickname} has been set to {(player.IsActive ? "active" : "inactive")}.");
                        await UpdateList();
                        return;
                    } else {
                        player.IsActive = true;
                        PlayerList.PlayerlistDB[PlayerList.PlayerlistDB.IndexOf(player)].IsActive = true;
                        await Context.Channel.SendMessageAsync($"Player {player.Nickname} has been set to {(player.IsActive ? "active" : "inactive")}.");
                        await UpdateList();
                        return;

                    }
                }
            }
            await Context.Channel.SendMessageAsync("Player not found in the list."); */
  }
}

export class Add implements ICommand {
  command: string = 'add';
  alias: string[] = ['ap', 'addplayer'];
  summary: string = ': Adds a player to the end of the list.\nex: `add @player false`';
  parameters: IParameters[] = [
    { name: 'user', description: 'User name or UserId that you want to add' },
    { name: 'isActive', description: 'If you want to add to the list as inactive send false, true is the default' },
  ];
  execute(message: Message, args?: any[]): Promise<void> {
    return null;
    /* ulong _id;
            SocketGuildUser _user;
            if (!Caches.IsOpen.isOpen)
            {
                await Context.Channel.SendMessageAsync("There is no open queue.");
                return;
            }

            try
            {
                _id = ulong.Parse(userID);
                _user = Context.Guild.GetUser(_id);
            }
            catch (Exception)
            {
                _user = Context.Guild.GetUser(Context.Message.MentionedUsers.First().Id);
            }

            await Context.Channel.TriggerTypingAsync();

            if (_user == null)
            {
                await Context.Channel.SendMessageAsync($"User was not found.");
                return;
            }

            foreach (Player check in PlayerList.PlayerlistDB)
            {
                if (check.DiscordID == _user.Id)
                {
                    foreach (Player player in PlayerList.Playerlist)
                    {
                        if (player.DiscordID == _user.Id)
                        {
                            await Context.Channel.SendMessageAsync($"{player.Nickname} is already in the list at number {(PlayerList.Playerlist.IndexOf(player) + 1)}.");
                            return;
                        }
                        else
                        {
                            PlayerList.Playerlist.Add(check);
                            await Context.Channel.SendMessageAsync($"{check.Nickname} has been added to the list.");
                            return;
                        }
                    }
                }
            }

            Player player1 = new Player();
            player1.Nickname = _user.Username;
            player1.DiscordID = _user.Id;
            player1.IsActive = isActive;

            PlayerList.Playerlist.Add(player1);
            PlayerList.PlayerlistDB.Add(player1);

            await Context.Channel.SendMessageAsync($"{player1.Nickname} has been added to the queue.");
            await UpdateList(); */
  }
}

export class Remove implements ICommand {
  command: string = 'remove';
  alias: string[] = ['removeplayer', 'rp', '-p'];
  summary: string = ': Remove a player from the queue\n' + 'Can pass a reason as a second argument.\nex. `remove @player reason.`';
  parameters: IParameters[] = [
    { name: 'user', description: 'User name or UserId that you want to remove' },
    { name: 'reason', description: 'Reason for removing from the list it can be empty' },
  ];
  execute(message: Message, args?: any[]): Promise<void> {
    return null;
    /* if (!Caches.IsOpen.isOpen)
            {
                await Context.Channel.SendMessageAsync("There is no open queue.");
                return;
            }

            await Context.Channel.TriggerTypingAsync();
            ulong _id;
            SocketGuildUser _user;
            var embed = new EmbedBuilder().WithTitle("Remove Player");

            try  //Check if userID is an @mention or a discordID and assigns them appropriately.
            {
                _id = ulong.Parse(userID);
                _user = Context.Guild.GetUser(_id);
            }
            catch (Exception)
            {
                _user = Context.Guild.GetUser(Context.Message.MentionedUsers.First().Id);
            }

            // Search user list for username
            foreach (Player player in PlayerList.Playerlist)
            {
                if (player.DiscordID == _user.Id)   // Remove user from list
                {
                    PlayerList.Playerlist.Remove(player);
                    PlayerList.PlayerlistDB.Remove(player);
                    embed.WithDescription($"{player.Nickname} has been removed from the queue.\nReason: {reason}")
                        .WithColor(Color.DarkRed);
                    await _user.SendMessageAsync($"You have been removed from the queue.\nReason: {reason}");
                    break;
                }
                else
                {
                    embed.WithDescription("Player not found")
                        .WithColor(Color.DarkRed);
                }
            }

            await Context.Channel.SendMessageAsync(embed: embed.Build());
            await UpdateList(); */
  }
}

export class Insert implements ICommand {
  command: string = 'insert';
  alias: string[] = ['ip', 'insertplayer'];
  summary: string =
    ': Insert a player into a specific spot in the queue.\nDefaults to the 1st element (front of queue).\n' + 'ex: `insert @player false 5`';
  parameters: IParameters[] = [
    { name: 'user', description: 'User name or UserId that you want to insert' },
    { name: 'isActive', description: 'Active state' },
    { name: 'position', description: 'Position' },
  ];
  execute(message: Message, args?: any[]): Promise<void> {
    return null;
    /* ulong _id;
            SocketGuildUser _user;
            if (!Caches.IsOpen.isOpen)
            {
                await Context.Channel.SendMessageAsync("There is no open queue.");
                return;
            }

            if (position > 0) position--;
            try
            {
                _id = ulong.Parse(userID);
                _user = Context.Guild.GetUser(_id);
            }
            catch (Exception)
            {
                _user = Context.Guild.GetUser(Context.Message.MentionedUsers.First().Id);
            }

            await Context.Channel.TriggerTypingAsync();

            if (_user == null)
            {
                await Context.Channel.SendMessageAsync($"User was not found.");
                return;
            }

            foreach (Player check in PlayerList.PlayerlistDB)
            {
                if (check.DiscordID == _user.Id)
                {
                    foreach (Player player in PlayerList.Playerlist)
                    {
                        if (player.DiscordID == _user.Id)
                        {
                            await Context.Channel.SendMessageAsync($"{player.Nickname} is already in the list at number {(PlayerList.Playerlist.IndexOf(player) + 1)}.");
                            return;
                        }
                        else
                        {
                            PlayerList.Playerlist.Add(check);
                            await Context.Channel.SendMessageAsync($"{check.Nickname} has been added to the list.");
                            return;
                        }
                    }
                }
            }

            Player player1 = new Player();
            player1.Nickname = _user.Username;
            player1.DiscordID = _user.Id;
            player1.IsActive = isActive;

            PlayerList.Playerlist.Add(player1);
            PlayerList.PlayerlistDB.Add(player1);

            await Context.Channel.SendMessageAsync($"{player1.Nickname} has been added to the queue."); */
  }
}

export class Move implements ICommand {
  command: string = 'move';
  alias: string[];
  summary: string = ': Move a player in the list from one position to another.\nex: `move @player 5`';
  parameters: IParameters[] = [
    { name: 'user', description: 'User name or UserId that you want to move' },
    { name: 'position', description: 'Position' },
  ];
  execute(message: Message, args?: any[]): Promise<void> {
    return null;
    /*  if (!Caches.IsOpen.isOpen)
            {
                await Context.Channel.SendMessageAsync("There is no open queue.");
                return;
            }
            var embed = new EmbedBuilder();
            int location;
            if (position > 0) position--;

            ulong _id;
            SocketGuildUser _user;

            try
            {
                _id = ulong.Parse(userID);
                _user = Context.Guild.GetUser(_id);
            }
            catch (Exception)
            {
                _user = Context.Guild.GetUser(Context.Message.MentionedUsers.First().Id);
            }

            foreach (Player player in PlayerList.Playerlist)
            {
                if (player.DiscordID == _user.Id)
                {
                    location = PlayerList.Playerlist.IndexOf(player);
                    PlayerList.Playerlist.Remove(player);
                    PlayerList.Playerlist.Insert(position, player);

                    embed.WithTitle($"{player.Nickname} has been moved")
                        .WithDescription($" from position {location + 1} to {position + 1}.");

                    await Context.Channel.SendMessageAsync(embed: embed.Build());
                    return;
                }
            }
            embed.WithTitle("Player not found.")
                .WithDescription("Player was not found in the list.");

            await Context.Channel.SendMessageAsync(embed: embed.Build()); */
  }
}

export class Ban implements ICommand {
  command: string = 'ban';
  alias: string[];
  summary: string = ': Ban a player from the queue\nCan pass a reason as a second argument.\nex. `ban @player reason.`';
  parameters: IParameters[] = [
    { name: 'user', description: 'User name or UserId that you want to ban' },
    { name: 'reason', description: 'Reason for the ban' },
  ];
  execute(message: Message, args?: any[]): Promise<void> {
    return null;
    /*  if (!Caches.IsOpen.isOpen)
            {
                await Context.Channel.SendMessageAsync("There is no open queue.");
                return;
            }

            await Context.Channel.TriggerTypingAsync();
            ulong _id;
            SocketGuildUser _user;
            var embed = new EmbedBuilder().WithTitle("Ban Player");

            try  //Check if userID is an @mention or a discordID and assigns them appropriately.
            {
                _id = ulong.Parse(userID);
                _user = Context.Guild.GetUser(_id);
            }
            catch
            {
                _user = Context.Guild.GetUser(Context.Message.MentionedUsers.First().Id);
            }

            // Search user list for username
            foreach (Player player in PlayerList.PlayerlistDB)
            {
                if (player.DiscordID == _user.Id)   // Remove user from list
                {
                    player.IsBanned = true;
                    player.BannedReason = reason;
                    if (PlayerList.Playerlist.Contains(player))
                        PlayerList.Playerlist.Remove(player);
                    PlayerList.PlayerlistDB[PlayerList.PlayerlistDB.IndexOf(player)].IsBanned = true;
                    PlayerList.Bannedlist.Add(player);
                    embed.WithDescription($"{player.Nickname} has been banned from the queue.\nReason: {reason}")
                        .WithColor(Color.DarkRed);
                    await _user.SendMessageAsync($"You have been banned from the queue.\nReason: {reason}");
                    break;
                }
                else
                {
                    embed.WithDescription("Player not found")
                        .WithColor(Color.DarkRed);
                }
            }

            await Context.Channel.SendMessageAsync(embed: embed.Build()); */
  }
}

export class UnBan implements ICommand {
  command: string = 'unban';
  alias: string[];
  summary: string = ': Removes a player from the banned list.';
  parameters: IParameters[] = [{ name: 'user', description: 'User name or UserId that you want to unban' }];
  execute(message: Message, args?: any[]): Promise<void> {
    return null;
    /*  SocketGuildUser _user;
            ulong _id;
            var embed = new EmbedBuilder().WithTitle("Unban");

            try  //Check if userID is an @mention or a discordID and assigns them appropriately.
            {
                _id = ulong.Parse(userID);
                _user = Context.Guild.GetUser(_id);
            }
            catch (Exception)
            {
                _user = Context.Guild.GetUser(Context.Message.MentionedUsers.First().Id);
            }

            foreach (Player player in PlayerList.Bannedlist)
            {
                if (player.DiscordID == _user.Id)
                {
                    if (PlayerList.PlayerlistDB.Contains(player))
                    {
                        PlayerList.PlayerlistDB[PlayerList.PlayerlistDB.IndexOf(player)].IsBanned = false;
                        PlayerList.Bannedlist.Remove(player);
                        embed.WithDescription($"{player.Nickname}'s ban has been lifted.")
                            .WithColor(Color.DarkRed);
                        await _user.SendMessageAsync($"Your ban from the queue has been lifted.");
                        break;
                    }
                    else
                    {
                        embed.WithDescription("Player not found")
                            .WithColor(Color.DarkRed);
                    }
                    break;
                }
            }

            await Context.Channel.SendMessageAsync(embed: embed.Build()); */
  }
}

export class QueueStats implements ICommand {
  command: string = 'qstat';
  alias: string[] = ['qstats'];
  summary: string = ': Displays the total stats of the currently opened queue.';
  parameters: IParameters[];
  execute(message: Message, args?: any[]): Promise<void> {
    return null;
    /*  double AverageGames = 0;

            var embed = new EmbedBuilder().WithTitle("Queue Stats")
                .WithDescription("Statistics:")
                .WithColor(Color.DarkGrey);

            var field = new EmbedFieldBuilder();

            field.WithName("Total players:")
                .WithValue(PlayerList.PlayerlistDB.Count());
            embed.AddField(field);

            foreach (Player player in PlayerList.PlayerlistDB)
                AverageGames += player.GamesPlayed;

            var field1 = new EmbedFieldBuilder();
            field1.WithName("Avg. Games Played:")
                .WithValue( (AverageGames / PlayerList.PlayerlistDB.Count()) );
            embed.AddField(field1);

            var uptime = DateTime.Now - Caches.Messages.ReactionMessage.CreatedAt;

            var field2 = new EmbedFieldBuilder();
            field2.WithName("Queue Uptime:")
                .WithValue($"{uptime.Hours} h {uptime.Minutes} m");
            embed.AddField(field2);

            await Context.Channel.SendMessageAsync(embed: embed.Build()); */
  }
}

export class GamesPlayedAdd implements ICommand {
  command: string = 'gp+';
  alias: string[];
  summary: string = ': Adds one to the games played counter of provided user';
  parameters: IParameters[] = [{ name: 'user', description: 'User name or UserId that you want to add' }];
  execute(message: Message, args?: any[]): Promise<void> {
    return null;
    /*  if (!Caches.IsOpen.isOpen)
            {
                await Context.Channel.SendMessageAsync("There is no open queue.");
                return;
            }

            await Context.Channel.TriggerTypingAsync();
            ulong _id;
            SocketGuildUser _user;

            try  //Check if userID is an @mention or a discordID and assigns them appropriately.
            {
                _id = ulong.Parse(userID);
                _user = Context.Guild.GetUser(_id);
            }
            catch
            {
                _user = Context.Guild.GetUser(Context.Message.MentionedUsers.First().Id);
            }

            foreach (Player player in PlayerList.PlayerlistDB)
            {
                if (player.DiscordID == _user.Id)
                {
                    player.GamesPlayed++;
                    await Context.Channel.SendMessageAsync($"{player.Nickname}'s game count incremented by 1.");
                }
            } */
  }
}

export class GamesPlayedSubtracts implements ICommand {
  command: string = 'gp-';
  alias: string[];
  summary: string = ': Subtracts one from the games played counter of provided user';
  parameters: IParameters[] = [{ name: 'user', description: 'User name or UserId that you want to subtract' }];
  execute(message: Message, args?: any[]): Promise<void> {
    return null;
    /*
            if (!Caches.IsOpen.isOpen)
            {
                await Context.Channel.SendMessageAsync("There is no open queue.");
                return;
            }

            await Context.Channel.TriggerTypingAsync();
            ulong _id;
            SocketGuildUser _user;

            try  //Check if userID is an @mention or a discordID and assigns them appropriately.
            {
                _id = ulong.Parse(userID);
                _user = Context.Guild.GetUser(_id);
            }
            catch
            {
                _user = Context.Guild.GetUser(Context.Message.MentionedUsers.First().Id);
            }

            foreach (Player player in PlayerList.PlayerlistDB)
            {
                if (player.DiscordID == _user.Id)
                {
                    if (player.GamesPlayed > 0)
                    {
                        player.GamesPlayed--;
                        await Context.Channel.SendMessageAsync($"{player.Nickname}'s game count decremented by 1.");
                    }
                }
            } */
  }
}
