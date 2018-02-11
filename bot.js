const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
  console.log('I am ready!');
  bot.user.setPresence({ game: { name: 'with glitter ✨', type: 0 } })
  
  //var channeli = bot.channels.get('339905111482564608');
  //channeli.sendMessage("I'm here! :sparkles:");
  
});

const prefix ="✨ "
  

bot.on('message', message => {
  if(message.author.bot)return;



var rand = Math.round(Math.random() * (7 - 1) + 1)
var cheesemessage = [ '',
            "Here's some cheese! :cheese:",
            ":cheese: :sparkles: !",
            'Oui?',
            "Would you like some cheese?",
            "I cannot stop twinkling!",
            "Bonjour!", 
            ":sparkles: :cheese: :sparkles:"
              ];

if(message.content.toLowerCase().includes( ['bepsi'] ) || message.content.toLowerCase().includes( ['pepsi'] ) ){
       message.react(":bepsi:403237730919645224");
   }

if(message.content.toLowerCase().includes( ['aoyama'] ) ){
     if(message.content.toLowerCase().startsWith( ['✨'] ) ){ }

     else if(message.content.toLowerCase().includes( ['cheese'] ) ){
        message.channel.sendMessage( cheesemessage[rand] );
   }
   
     else message.react("✨");
   }   

 if(message.content.toLowerCase().includes( ['love'] ) ){
       message.react("💛");
   }  
  
 if(message.content.toLowerCase().includes( ['shinsou'] ) ){
       message.react("💜");
   }  
  
 if(message.content.toLowerCase().includes( ['shinyuuga'] ) ){
       message.react("💜");
       message.react("💛");
   }  

var randomaoyama = Math.round(Math.random() * (187 - 1) + 1)
var aoyamapic = [ '',
            "https://i.imgur.com/XmYLGLQ.png",
"https://i.imgur.com/n0twlbu.png",
"https://i.imgur.com/DprvGBa.png",
"https://i.imgur.com/qteUx5B.png",
"https://i.imgur.com/n5qA0I7.png",
"https://i.imgur.com/KD63n6t.png",
"https://i.imgur.com/HldD7H2.png",
"https://i.imgur.com/5ESaqKl.png",
"https://i.imgur.com/rpzPNLA.png",
"https://i.imgur.com/y0jUw51.png",
"https://i.imgur.com/oqgjYd9.png",
"https://i.imgur.com/yaPuzKt.png",
"https://i.imgur.com/NZDiNxY.png",
"https://i.imgur.com/hjGeyC3.png",
"https://i.imgur.com/zNeXVWI.png",
"https://i.imgur.com/Y1JenxU.png",
"https://i.imgur.com/E8PPQSV.png",
"https://i.imgur.com/ljOArGI.png",
"https://i.imgur.com/FqwFlDU.png",
"https://i.imgur.com/fxiyWDu.png",
"https://i.imgur.com/EiiDEVL.png",
"https://i.imgur.com/187DICS.png",
"https://i.imgur.com/r3mL8xH.png",
"https://i.imgur.com/LZbMhc5.png",
"https://i.imgur.com/s4SOjOu.png",
"https://i.imgur.com/n3ec5Xn.png",
"https://i.imgur.com/CmKic9g.png",
"https://i.imgur.com/sdg8SoV.png",
"https://i.imgur.com/VPJPJtw.png",
"https://i.imgur.com/A1iVD68.png",
"https://i.imgur.com/e2VAiTx.png",
"https://i.imgur.com/Dth7lAH.png",
"https://i.imgur.com/W8W3Nvd.png",
"https://i.imgur.com/1OOq5Cd.png",
"https://i.imgur.com/ssaW4vK.png",
"https://i.imgur.com/ZxfhuHu.png",
"https://i.imgur.com/ok3NiMa.png",
"https://i.imgur.com/WuGUOuN.png",
"https://i.imgur.com/dRvMAX3.png",
"https://i.imgur.com/NoaKXY2.png",
"https://i.imgur.com/Mvfu2QA.png",
"https://i.imgur.com/i6Ja6Nr.png",
"https://i.imgur.com/It1mp0i.png",
"https://i.imgur.com/tjBpqMt.png",
"https://i.imgur.com/ulsQE6q.png",
"https://i.imgur.com/hJqeuup.png",
"https://i.imgur.com/G0fvxI9.png",
"https://i.imgur.com/KZa8c5l.png",
"https://i.imgur.com/sersdqx.png",
"https://i.imgur.com/nYZynun.png",
"https://i.imgur.com/QbA3oqb.png",
"https://i.imgur.com/4apGfGZ.png",
"https://i.imgur.com/AQQPdNS.png",
"https://i.imgur.com/9Mavn3d.png",
"https://i.imgur.com/7moBBQa.png",
"https://i.imgur.com/gSNLHVg.png",
"https://i.imgur.com/XsW8Z7w.png",
"https://i.imgur.com/i54YTRl.png",
"https://i.imgur.com/YClgp04.png",
"https://i.imgur.com/A6kbR4K.png",
"https://i.imgur.com/zhlE1E1.png",
"https://i.imgur.com/H9axweX.png",
"https://i.imgur.com/tSEsKh1.png",
"https://i.imgur.com/pa3mxJy.png",
"https://i.imgur.com/7aLGzbG.png",
"https://i.imgur.com/0tYHA3Q.png",
"https://i.imgur.com/63jOfmO.png",
"https://i.imgur.com/taiSmmn.png",
"https://i.imgur.com/ayzCfTD.png",
"https://i.imgur.com/t4MbUSL.png",
"https://i.imgur.com/rogoJsJ.png",
"https://i.imgur.com/91XjJos.png",
"https://i.imgur.com/BClrZis.png",
"https://i.imgur.com/wHrBdHy.png",
"https://i.imgur.com/GJFELK0.png",
"https://i.imgur.com/ZpuMCiB.png",
"https://i.imgur.com/FIT3HdZ.png",
"https://i.imgur.com/ikud5Yt.png",
"https://i.imgur.com/zZpYZCQ.png",
"https://i.imgur.com/wbSCCgu.png",
"https://i.imgur.com/pRCZc7u.png",
"https://i.imgur.com/xvWhScP.png",
"https://i.imgur.com/5xFZpDm.png",
"https://i.imgur.com/ZbDgnhc.png",
"https://i.imgur.com/q01EuX4.png",
"https://i.imgur.com/HZMuCzz.png",
"https://i.imgur.com/EkAafCp.png",
"https://i.imgur.com/GCU7Z1o.png",
"https://i.imgur.com/aapEsRT.png",
"https://i.imgur.com/WMqj491.png",
"https://i.imgur.com/ciASgBZ.png",
"https://i.imgur.com/1bWEUJ6.png",
"https://i.imgur.com/DxBqTTm.png",
"https://i.imgur.com/jCp5VMG.png",
"https://i.imgur.com/fC7QgvJ.png",
"https://i.imgur.com/CZz0wFX.png",
"https://i.imgur.com/slCpJFZ.png",
"https://i.imgur.com/WGOf4Hr.png",
"https://i.imgur.com/CxM4zsI.png",
"https://i.imgur.com/tvCzNzE.png",
"https://i.imgur.com/nQRokXo.png",
"https://i.imgur.com/FXyzMq8.png",
"https://i.imgur.com/DWWd56N.png",
"https://i.imgur.com/qvBScsX.png",
"https://i.imgur.com/ZfpaPoB.png",
"https://i.imgur.com/KlSGrWb.png",
"https://i.imgur.com/TIhI3vo.png",
"https://i.imgur.com/nxXQMTi.png",
"https://i.imgur.com/qMaaTrg.png",
"https://i.imgur.com/KlxW85N.png",
"https://i.imgur.com/Z6nkQO7.png",
"https://i.imgur.com/I6WNB4F.png",
"https://i.imgur.com/NpWXpVp.png",
"https://i.imgur.com/WtuXdsA.png",
"https://i.imgur.com/8aUXphK.png",
"https://i.imgur.com/FUpdEir.png",
"https://i.imgur.com/M4Ls24z.png",
"https://i.imgur.com/SKsCgti.png",
"https://i.imgur.com/5yHwZSJ.png",
"https://i.imgur.com/vFpeOqV.png",
"https://i.imgur.com/9sD6oN4.png",
"https://i.imgur.com/vbwLLIA.png",
"https://i.imgur.com/qEISI6r.png",
"https://i.imgur.com/QjznYZc.png",
"https://i.imgur.com/ePWXB9h.png",
"https://i.imgur.com/RctgvUG.png",
"https://i.imgur.com/LSJOntf.png",
"https://i.imgur.com/uxIJwRX.png",
"https://i.imgur.com/IRHDw2z.png",
"https://i.imgur.com/9cemFgK.png",
"https://i.imgur.com/QZXQHim.png",
"https://i.imgur.com/loo0hLx.png",
"https://i.imgur.com/PTcfLXs.png",
"https://i.imgur.com/dmbhrnM.png",
"https://i.imgur.com/bzCFcQu.png",
"https://i.imgur.com/ZdWBEfD.png",
"https://i.imgur.com/9CzQcdf.png",
"https://i.imgur.com/5yEwUrT.png",
"https://i.imgur.com/gSCoOem.png",
"https://i.imgur.com/L50YqKk.png",
"https://i.imgur.com/8e8Wvch.png",
"https://i.imgur.com/NmQR8Hf.png",
"https://i.imgur.com/OrUxvff.png",
"https://i.imgur.com/xi5Xq0g.png",
"https://i.imgur.com/02VNrx4.png",
"https://i.imgur.com/naii68M.png",
"https://i.imgur.com/yWG1Llv.png",
"https://i.imgur.com/K7FMJrR.png",
"https://i.imgur.com/itWQ5gV.png",
"https://i.imgur.com/34PbOUI.png",
"https://i.imgur.com/xcxosoF.png",
"https://i.imgur.com/ZXaIfxK.png",
"https://i.imgur.com/31IFc7O.png",
"https://i.imgur.com/gwVU4GO.png",
"https://i.imgur.com/qRExoz9.png",
"https://i.imgur.com/NUH9Vdg.png",
"https://i.imgur.com/i2WbNQy.png",
"https://i.imgur.com/xPM77r2.png",
"https://i.imgur.com/5Sz3Cyt.png",
"https://i.imgur.com/pOii3uj.png",
"https://i.imgur.com/O9cssHe.png",
"https://i.imgur.com/ixwDI1q.png",
"https://i.imgur.com/qicqF1K.png",
"https://i.imgur.com/oMw5dv4.png",
"https://i.imgur.com/xRUcN8u.png",
"https://i.imgur.com/DZctSLD.png",
"https://i.imgur.com/i6LLck8.png",
"https://i.imgur.com/qXjhJd2.png",
"https://i.imgur.com/nRcQsp1.png",
"https://i.imgur.com/c43Vavt.png",
"https://i.imgur.com/KkRiw9f.png",
"https://i.imgur.com/iOJjDXi.png",
"https://i.imgur.com/P1MPlFl.png",
"https://i.imgur.com/5n16fsk.png",
"https://i.imgur.com/BjUDIhJ.png",
"https://i.imgur.com/YY6anqk.png",
"https://i.imgur.com/RgjkoqE.png",
"https://i.imgur.com/fJ0PtlP.png",
"https://i.imgur.com/E5q2dPd.png",
"https://i.imgur.com/VNWq7Fm.png",
"https://i.imgur.com/vjfRGzQ.png",
"https://i.imgur.com/LmLgI8w.png",
"https://i.imgur.com/BYgKUzs.png",
"https://i.imgur.com/r5qKViU.png",
"https://i.imgur.com/8oPeR3L.png",
"https://i.imgur.com/LbhaeSV.png",
"https://i.imgur.com/SuJ78vU.png",
              ];


const AOYOO = new Discord.RichEmbed()
   /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x36393E)
  .setImage(aoyamapic[randomaoyama]);
  
  
  
  if (message.content.startsWith(prefix + "aoyama"))  {
message.channel.sendEmbed(AOYOO);
}
  

if (message.content.startsWith(prefix + "help"))  {
message.channel.sendMessage(":sparkles: :cheese: A  **Yuuga Aoyama**  Bot   |   Prefix: `✨`\nCurrent commands: `aoyama` , `clap` ,  `cheese` , `house` |  Command example: `✨ aoyama`");
}


if (message.content.toLowerCase().startsWith(prefix + "cheese <@!")) {
  var odene= message.cleanContent.replace("✨ cheese @", "")
  message.channel.sendMessage( ":cheese:  |  **" + message.author.username + "** has given **" + odene + "** sparkly cheese!");
}



  if (message.content.startsWith(prefix + "house"))  {
    var saying= message.cleanContent.replace("✨ house", " ")
message.channel.sendMessage("┏┓\n┃┃╱╲ In this \n┃╱╱╲╲ house \n╱╱╭╮╲╲ we love \n▔▏┗┛▕▔ & appreciate \n╱▔▔▔▔▔▔▔▔▔▔╲ \n"+saying+"\n╱╱┏┳┓╭╮┏┳┓ ╲╲ \n▔▏┗┻┛┃┃┗┻┛▕▔ ");
}


 if (message.content.startsWith(prefix + "clap"))  {
   var menos=message.cleanContent.replace("✨ clap", "")
    var clappy= menos.toUpperCase().replace(/ /g," :clap: ")
message.channel.sendMessage(clappy + " :clap: ");
}



});











bot.login(process.env.BOT_TOKEN);
