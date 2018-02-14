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

  
var randomaoyamamango = Math.round(Math.random() * (214 - 1) + 1)
var aoyamapicmango = [ '',
            "https://i.imgur.com/zddiroO.png",
"https://i.imgur.com/fCaL9Rw.png",
"https://i.imgur.com/VsffWC1.png",
"https://i.imgur.com/DWg7tjl.png",
"https://i.imgur.com/5evF3rH.png",
"https://i.imgur.com/eQr91Q1.png",
"https://i.imgur.com/CHD9w6h.png",
"https://i.imgur.com/4esAaim.png",
"https://i.imgur.com/boNIKL8.png",
"https://i.imgur.com/0B2bZNT.png",
"https://i.imgur.com/8Mxvn3b.png",
"https://i.imgur.com/y5uSF75.png",
"https://i.imgur.com/zrG36dH.png",
"https://i.imgur.com/ZB1nQAr.png",
"https://i.imgur.com/SQG4DBZ.png",
"https://i.imgur.com/JbQ6dDb.png",
"https://i.imgur.com/ScJTeUO.png",
"https://i.imgur.com/5dX97pD.png",
"https://i.imgur.com/WfFKOEO.png",
"https://i.imgur.com/PmTrLvt.png",
"https://i.imgur.com/I4KXHjR.png",
"https://i.imgur.com/EiHD9R6.png",
"https://i.imgur.com/WN6LS4I.png",
"https://i.imgur.com/rMVXrXJ.png",
"https://i.imgur.com/2ZFKl7e.png",
"https://i.imgur.com/rm9iheD.png",
"https://i.imgur.com/nnx7A72.png",
"https://i.imgur.com/Zbtpteg.png",
"https://i.imgur.com/fNl75lD.png",
"https://i.imgur.com/mLSfR4O.png",
"https://i.imgur.com/6AeLgE0.png",
"https://i.imgur.com/yLmoLxf.png",
"https://i.imgur.com/YGxSxJN.png",
"https://i.imgur.com/6SxUWdm.jpg",
"https://i.imgur.com/pxd2Rio.png",
"https://i.imgur.com/hf3B9Wf.png",
"https://i.imgur.com/XtVnjMv.png",
"https://i.imgur.com/AJ3AeOo.png",
"https://i.imgur.com/Q8gTxg3.png",
"https://i.imgur.com/Xanf4sJ.png",
"https://i.imgur.com/Jq0g6um.png",
"https://i.imgur.com/xgpjWLj.png",
"https://i.imgur.com/Z7FHHEK.png",
"https://i.imgur.com/7GPmLuj.png",
"https://i.imgur.com/HUdyaCr.png",
"https://i.imgur.com/fzqYMfk.png",
"https://i.imgur.com/hgFOOm8.png",
"https://i.imgur.com/yv9IoCI.png",
"https://i.imgur.com/Xwn3vf9.png",
"https://i.imgur.com/XUoPk0W.png",
"https://i.imgur.com/rj72Gtm.png",
"https://i.imgur.com/GdygVw8.png",
"https://i.imgur.com/FsxHmrx.png",
"https://i.imgur.com/26ZqI90.png",
"https://i.imgur.com/jQQhSML.png",
"https://i.imgur.com/Ue3ce92.png",
"https://i.imgur.com/gN84r6h.png",
"https://i.imgur.com/pxovLJb.png",
"https://i.imgur.com/Ay5j0Ga.png",
"https://i.imgur.com/AREkjeb.png",
"https://i.imgur.com/VmY6FOX.png",
"https://i.imgur.com/DKXyKZy.png",
"https://i.imgur.com/8f7vP3T.png",
"https://i.imgur.com/6emqvyv.png",
"https://i.imgur.com/K3T64eF.png",
"https://i.imgur.com/etBUHU9.png",
"https://i.imgur.com/FbxhAEZ.png",
"https://i.imgur.com/11Qczdt.png",
"https://i.imgur.com/hJ3NqJy.png",
"https://i.imgur.com/HVX0zKp.png",
"https://i.imgur.com/j9MZtDU.png",
"https://i.imgur.com/tQPZPf1.png",
"https://i.imgur.com/ISPpXnv.png",
"https://i.imgur.com/dmAUF6h.png",
"https://i.imgur.com/8qc4p5v.png",
"https://i.imgur.com/vfUCf6z.png",
"https://i.imgur.com/r3MY3ah.png",
"https://i.imgur.com/1MPyZJr.png",
"https://i.imgur.com/jYKzgwa.png",
"https://i.imgur.com/wrJfLj8.png",
"https://i.imgur.com/rNm9vba.png",
"https://i.imgur.com/tYFGYua.png",
"https://i.imgur.com/J8K6AE6.png",
"https://i.imgur.com/rxTBfGH.png",
"https://i.imgur.com/3mV48QU.png",
"https://i.imgur.com/MLFlNE9.png",
"https://i.imgur.com/WhF5uZl.png",
"https://i.imgur.com/jkf8Ele.png",
"https://i.imgur.com/jqcpqDr.png",
"https://i.imgur.com/9azhP8p.png",
"https://i.imgur.com/EUlmJLP.png",
"https://i.imgur.com/dNHB5U2.png",
"https://i.imgur.com/kGnNeDg.png",
"https://i.imgur.com/jJFjaja.png",
"https://i.imgur.com/VMHNLNf.png",
"https://i.imgur.com/Hbz69o7.png",
"https://i.imgur.com/iWZ4eEW.png",
"https://i.imgur.com/aOWuymR.png",
"https://i.imgur.com/iR4pA69.png",
"https://i.imgur.com/7jGGEXq.png",
"https://i.imgur.com/Hda7AjY.png",
"https://i.imgur.com/CHJTgqE.png",
"https://i.imgur.com/QSez4u4.png",
"https://i.imgur.com/lOdT1lv.png",
"https://i.imgur.com/UbcvWII.png",
"https://i.imgur.com/WGFwTd3.png",
"https://i.imgur.com/IowJAxW.png",
"https://i.imgur.com/y2UZIXX.png",
"https://i.imgur.com/hsEeTBQ.png",
"https://i.imgur.com/BCXImnZ.png",
"https://i.imgur.com/NSegJy9.png",
"https://i.imgur.com/j83EydA.png",
"https://i.imgur.com/rcPksic.png",
"https://i.imgur.com/1tAeZX4.png",
"https://i.imgur.com/E7WY3Ze.png",
"https://i.imgur.com/ZT3ydeO.png",
"https://i.imgur.com/7MrCQWp.png",
"https://i.imgur.com/khnMqon.png",
"https://i.imgur.com/zwgV4uo.png",
"https://i.imgur.com/YlFs0dl.png",
"https://i.imgur.com/tOloZUu.png",
"https://i.imgur.com/XMFDHOs.png",
"https://i.imgur.com/PnOaMYH.png",
"https://i.imgur.com/McRyacE.png",
"https://i.imgur.com/Mz0wnrQ.png",
"https://i.imgur.com/64mGRun.png",
"https://i.imgur.com/m2BJECa.png",
"https://i.imgur.com/21iCKtv.png",
"https://i.imgur.com/4yzRgj2.png",
"https://i.imgur.com/NPSCXJc.png",
"https://i.imgur.com/QCC1z4v.png",
"https://i.imgur.com/pRt9m6O.png",
"https://i.imgur.com/GetBq4Q.png",
"https://i.imgur.com/LFlFl7i.png",
"https://i.imgur.com/gT8tnN1.png",
"https://i.imgur.com/eFY7eNp.png",
"https://i.imgur.com/vM3PUHp.png",
"https://i.imgur.com/s5I6RHx.png",
"https://i.imgur.com/PGgi1TP.png",
"https://i.imgur.com/LEt128U.png",
"https://i.imgur.com/2nXJ3mL.png",
"https://i.imgur.com/oxLEjUG.png",
"https://i.imgur.com/iT4ToPG.png",
"https://i.imgur.com/rLoRbPl.png",
"https://i.imgur.com/GLEeh6W.png",
"https://i.imgur.com/oN1PeK3.png",
"https://i.imgur.com/jOl0pZ7.png",
"https://i.imgur.com/dDnBdZF.png",
"https://i.imgur.com/Ret9sd8.png",
"https://i.imgur.com/VZjt8Z6.png",
"https://i.imgur.com/mIiDvVP.png",
"https://i.imgur.com/CIuMeM2.png",
"https://i.imgur.com/S0jO0I1.png",
"https://i.imgur.com/4UKJQjt.png",
"https://i.imgur.com/GkesmSu.png",
"https://i.imgur.com/pmV7WTa.png",
"https://i.imgur.com/SQBTlDb.png",
"https://i.imgur.com/kZCRUCq.png",
"https://i.imgur.com/qFo7642.png",
"https://i.imgur.com/bA0JtVH.png",
"https://i.imgur.com/QmeCln8.png",
"https://i.imgur.com/IMoIM8Y.png",
"https://i.imgur.com/zzxQq04.png",
"https://i.imgur.com/mZw6kOT.png",
"https://i.imgur.com/qZ9YkEQ.png",
"https://i.imgur.com/tDKb5j0.png",
"https://i.imgur.com/WeZzMaW.png",
"https://i.imgur.com/xrFWerG.png",
"https://i.imgur.com/Ql2UmRh.png",
"https://i.imgur.com/UiCM1WH.png",
"https://i.imgur.com/F177Pg9.png",
"https://i.imgur.com/rbzvWJK.png",
"https://i.imgur.com/pcfcHax.jpg",
"https://i.imgur.com/LhvER0t.png",
"https://i.imgur.com/0YzHGqg.png",
"https://i.imgur.com/TqKcsOg.png",
"https://i.imgur.com/r8n39L4.png",
"https://i.imgur.com/opYUTqR.png",
"https://i.imgur.com/e9ofwDS.png",
"https://i.imgur.com/itapyQt.png",
"https://i.imgur.com/Kj3hNjw.png",
"https://i.imgur.com/y2mz9Uy.png",
"https://i.imgur.com/AzY9WRe.png",
"https://i.imgur.com/kzVD8Is.png",
"https://i.imgur.com/VBu1ctT.png",
"https://i.imgur.com/iJaV4RS.png",
"https://i.imgur.com/1cJf0bx.png",
"https://i.imgur.com/tNzGQR2.png",
"https://i.imgur.com/vAEPyov.png",
"https://i.imgur.com/FQ2DIfs.png",
"https://i.imgur.com/ApsvTyo.png",
"https://i.imgur.com/36uCtou.png",
"https://i.imgur.com/3uhbuWa.png",
"https://i.imgur.com/EO8YwgC.png",
"https://i.imgur.com/f5TJl7q.png",
"https://i.imgur.com/VcnRShl.png",
"https://i.imgur.com/Sepw6Dg.png",
"https://i.imgur.com/BVVsCVM.png",
"https://i.imgur.com/rRnVsrW.png",
"https://i.imgur.com/ZoTtAoC.png",
"https://i.imgur.com/tZYuAY0.png",
"https://i.imgur.com/Lvjxnar.png",
"https://i.imgur.com/uWcgkJV.png",
"https://i.imgur.com/I2SFTP8.png",
"https://i.imgur.com/hKg85yD.png",
"https://i.imgur.com/3I2WCe9.png",
"https://i.imgur.com/vprSS7A.png",
"https://i.imgur.com/MlAHoA4.png",
"https://i.imgur.com/n90Avrv.png",
"https://i.imgur.com/9C4DIgS.png",
"https://i.imgur.com/nEZ48Jj.png",
"https://i.imgur.com/RaAbY2Y.png",
"https://i.imgur.com/2WdZY0H.png",
"https://i.imgur.com/hI3MYrn.png"
              ];


const AOYOO = new Discord.RichEmbed()
   /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x36393E)
  .setImage(aoyamapic[randomaoyama]);
  
  
  const AOYOMANGO = new Discord.RichEmbed()
   /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x36393E)
  .setImage(aoyamapicmango[randomaoyamamango]);
  
   
  
  if (message.content.startsWith(prefix + "aoyama"))  {
    
      if(message.content.toLowerCase().includes( ['mang'] ) ){
          message.channel.sendEmbed(AOYOMANGO);
          }
    
      else message.channel.sendEmbed(AOYOO);
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
