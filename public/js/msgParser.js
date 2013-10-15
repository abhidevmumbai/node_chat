var smileyBaseURL = '/images/smileys/'
var msgParser = {
    msg: '',
    init: function(text){
        this.msg = this.smileyParser(text);
        return this.msg;
    },
    smileyParser: function(text){
        var set1 = [
            {
                image: '<img src="' +smileyBaseURL+ 'set1/bounce ball.gif" alt="" border="0"/>',
                regex: /([ \n\r\t]):D|:D([ \n\r\t])|(^):D($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/shock.gif" alt="" border="0"/>',
                regex: /([ \n\r\t]):shock:|:shock:([ \n\r\t])|(^):shock:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/my love.gif" alt="My love" border="0"/>',
                regex: /([ \n\r\t]):wub:|:wub:([ \n\r\t])|(^):wub:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/rolling on the floor laughing.gif" alt="Rolling on the floor laughing" border="0"/>',
                regex: /([ \n\r\t]):rofl:|:rofl:([ \n\r\t])|(^):rofl:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/tease.gif" alt="Tease" border="0"/>',
                regex: /([ \n\r\t]):nanananana:|:nanananana:([ \n\r\t])|(^):nanananana:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/thinking.gif" alt="Chin scratch" border="0"/>',
                regex: /([ \n\r\t]):chinscratch:|:chinscratch:?([ \n\r\t])|(^):chinscratch:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/big laugh.gif" alt="Big laugh" border="0"/>',
                regex: /([ \n\r\t]):lol:|:lol:([ \n\r\t])|(^):lol:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/applause.gif" alt="Applause" border="0"/>',
                regex: /([ \n\r\t]):clap:|:clap:([ \n\r\t])|(^):clap:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/big hug.gif" alt="Big hug" border="0"/>',
                regex: /([ \n\r\t]):hug:|:hug:([ \n\r\t])|(^):hug:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/bla bla.gif" alt="Bla Bla" border="0"/>',
                regex: /([ \n\r\t]):blabla:|:blabla:([ \n\r\t])|(^):blabla:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/bored.gif" alt="Bored" border="0"/>',
                regex: /([ \n\r\t]):bored:|:bored:([ \n\r\t])|(^):bored:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/bye bye.gif" alt="Bye Bye" border="0"/>',
                regex: /([ \n\r\t]):bye:|:bye:([ \n\r\t])|(^):bye:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/call me.gif" alt="Call me" border="0"/>',
                regex: /([ \n\r\t]):callme:|:callme:([ \n\r\t])|(^):callme:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/cheer up.gif" alt="Cheer up" border="0"/>',
                regex: /([ \n\r\t]):cheerup:|:cheerup:([ \n\r\t])|(^):cheerup:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/cheers.gif" alt="Cheers" border="0"/>',
                regex: /([ \n\r\t]):cheers:|:cheers:([ \n\r\t])|(^):cheers:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/congrats.gif" alt="Congrats" border="0"/>',
                regex: /([ \n\r\t]):congrats:|:congrats:([ \n\r\t])|(^):congrats:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/cool.gif" alt="Cool" border="0"/>',
                regex: /([ \n\r\t]):cool:|:cool:([ \n\r\t])|(^):cool:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/good luck.gif" alt="Good luck" border="0"/>',
                regex: /([ \n\r\t]):luck:|:luck:([ \n\r\t])|(^):luck:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/good morning.gif" alt="Good morning" border="0"/>',
                regex: /([ \n\r\t]):gm:|:gm:([ \n\r\t])|(^):gm:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/good night.gif" alt="Good night" border="0"/>',
                regex: /([ \n\r\t]):gn:|:gn:([ \n\r\t])|(^):gn:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/hear ya.gif" alt="Crying or Very sad" border="0"/>',
                regex: /([ \n\r\t]):cry:|:cry:([ \n\r\t])|(^):cry:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/hello, soldier.gif" alt="Hello, soldier" border="0"/>',
                regex: /([ \n\r\t]):hs:|:hs:([ \n\r\t])|(^):hs:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/i don\'t know.gif" alt="I don\'t know" border="0"/>',
                regex: /([ \n\r\t]):idk:|:idk:([ \n\r\t])|(^):idk:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/i hate you.gif" alt="I hate you" border="0"/>',
                regex: /([ \n\r\t]):ihu:|:ihu:([ \n\r\t])|(^):ihu:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/i know.gif" alt="I know" border="0"/>',
                regex: /([ \n\r\t]):ik:|:ik:([ \n\r\t])|(^):ik:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/i like you.gif" alt="I like you" border="0"/>',
                regex: /([ \n\r\t]):ilk:|:ilk:([ \n\r\t])|(^):ilk:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/i love you too.gif" alt="I love you too" border="0"/>',
                regex: /([ \n\r\t]):loveu2:|:loveu2:([ \n\r\t])|(^):loveu2:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/i love you.gif" alt="I love you" border="0"/>',
                regex: /([ \n\r\t]):lu:|:lu:([ \n\r\t])|(^):lu:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/i miss you.gif" alt="I miss you" border="0"/>',
                regex: /([ \n\r\t]):imu:|:imu:([ \n\r\t])|(^):imu:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/i\'m back.gif" alt="I\'m back" border="0"/>',
                regex: /([ \n\r\t]):back:|:back:([ \n\r\t])|(^):back:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/i\'m mad as hell.gif" alt="I\'m mad as hell" border="0"/>',
                regex: /([ \n\r\t]):mad:|:mad:([ \n\r\t])|(^):mad:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/i\'m so bored.gif" alt="I\'m so bored" border="0"/>',
                regex: /([ \n\r\t]):bored:|:bored:([ \n\r\t])|(^):bored:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/i\'m sorry.gif" alt="I\'m sorry" border="0"/>',
                regex: /([ \n\r\t]):sorry:|:sorry:([ \n\r\t])|(^):sorry:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/it\'s a beautiful thing.gif" alt="It\'s a beautiful thing" border="0"/>',
                regex: /([ \n\r\t]):beautiful:|:beautiful:([ \n\r\t])|(^):beautiful:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/it\'s about time.gif" alt="It\'s about time" border="0"/>',
                regex: /([ \n\r\t]):abouttime:|:abouttime:([ \n\r\t])|(^):abouttime:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/it\'s all good.gif" alt="It\'s all good" border="0"/>',
                regex: /([ \n\r\t]):allgood:|:allgood:([ \n\r\t])|(^):allgood:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/it\'s not fair.gif" alt="It\'s not fair" border="0"/>',
                regex: /([ \n\r\t]):notfair:|:notfair:([ \n\r\t])|(^):notfair:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/looser.gif" alt="Looser" border="0"/>',
                regex: /([ \n\r\t]):looser:|:looser:([ \n\r\t])|(^):looser:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/no.gif" alt="No" border="0"/>',
                regex: /([ \n\r\t]):no:|:no:([ \n\r\t])|(^):no:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/please.gif" alt="Please" border="0"/>',
                regex: /([ \n\r\t]):please:|:please:([ \n\r\t])|(^):please:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/welcome home.gif" alt="Welcome home" border="0"/>',
                regex: /([ \n\r\t]):welcomehome:|:welcomehome:([ \n\r\t])|(^):welcomehome:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/whatever.gif" alt="Whatever" border="0"/>',
                regex: /([ \n\r\t]):whatever:|:whatever:([ \n\r\t])|(^):whatever:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/you are welcome.gif" alt="You\'re welcome" border="0"/>',
                regex: /([ \n\r\t]):welcome:|:welcome:([ \n\r\t])|(^):welcome:($)/gm
            },{
                image: '<img src="' +smileyBaseURL+ 'set1/you rock.gif" alt="You rock" border="0"/>',
                regex: /([ \n\r\t]):rock:|:rock:([ \n\r\t])|(^):rock:($)/gm
            }
        ];
        var smileySet = set1;
        /* Smiley Parser */
        for (var i = smileySet.length - 1; i >= 0; --i){
            text = text.replace(smileySet[i].regex, smileySet[i].image);
        }
        return text;
    }

}