/* eslint-disable no-unused-vars */
import { Message } from 'discord.js';

export const util = {
  updateList: (message: Message) => {
    /*            var Message = Caches.Messages.PlayerListEmbed;
            var Channel = Caches.Messages.ReactionMessageChannel;

            var embed = new EmbedBuilder()
                                .WithTitle($"Current Player q-υωυ-e Listings ({PlayerList.Playerlist.Count()})")
                                .WithDescription("-----------------------------------------------------------------------")
                                .WithFooter($"{DateTime.Now}");
            List<EmbedFieldBuilder> fields = new List<EmbedFieldBuilder>();

            int counter = 1;

            foreach (Player player in PlayerList.Playerlist)
            {
                var field = new EmbedFieldBuilder();
                field.WithName($"{player.Nickname}")
                    .WithValue($"Status: {(player.IsActive ? "Active" : "`Inactive`")}\nPosition: {counter}\n-----------------------")
                    .WithIsInline(true);
                counter++;
                fields.Add(field);
            }

            foreach (var field in fields)
            {
                embed.AddField(field);
            }

            await Message.ModifyAsync(x => x.Embed = embed.Build());

        } */
  },
};
