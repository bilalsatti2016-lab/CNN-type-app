(function(){
"use strict";

/* ---------- mock data ---------- */
var CATS=[
  {slug:"world",name:"World",blurb:"Diplomacy, climate and life across borders."},
  {slug:"business",name:"Business",blurb:"Markets, trade and the way people work."},
  {slug:"technology",name:"Technology",blurb:"Devices, software and the rules around them."},
  {slug:"sports",name:"Sports",blurb:"Results, records and the stories behind them."},
  {slug:"entertainment",name:"Entertainment",blurb:"Film, music and what everyone is watching."},
  {slug:"science",name:"Science",blurb:"Space, oceans and discoveries."},
  {slug:"health",name:"Health",blurb:"Medicine, wellbeing and public health."}
];

var ARTICLES=[
{id:"w1",cat:"world",featured:true,breaking:true,mins:14,read:5,views:18420,author:"Lena Marković",
 title:"Riverside nations sign water-sharing framework after three-day summit",
 dek:"Delegates from six countries agreed seasonal flow limits and a joint monitoring body, closing a dispute that has run since 2019.",
 tags:["Diplomacy","Water","Climate"],
 quote:{text:"A river does not recognise a border, and neither can the rules that govern it.",by:"Elena Voss, summit chair"},
 body:[
  "Delegates from six riverside nations signed a framework agreement on Thursday that sets seasonal limits on how much water each country can draw from the shared basin. The deal closes a three-day summit and replaces a patchwork of bilateral arrangements that negotiators described as outdated.",
  "Under the terms, a joint monitoring body will publish flow readings from 40 stations every week. Any country that draws more than its agreed share for two consecutive months must explain the overage at an open session.",
  "Farming groups welcomed the predictability. Environmental campaigners said the limits do not go far enough to protect the delta, where salt water has crept upstream by almost 12 kilometres in a decade.",
  "Ratification votes are expected in each national parliament before the end of spring. Officials said the first monitoring report is due within 90 days."]},
{id:"w2",cat:"world",mins:95,read:4,views:9210,author:"Tomás Herrera",
 title:"Coastal cities start building flood barrier network after record autumn tides",
 dek:"Eight port cities will share a €2.4 billion plan to raise sea walls and install movable gates by 2031.",
 tags:["Climate","Infrastructure"],
 body:[
  "Eight port cities have approved a shared flood defence programme after this season’s tides pushed water over quay walls in four of them. The plan covers raised sea walls, movable gates at river mouths and pumping stations designed for storms that used to be rated once in a century.",
  "Engineers say the first gates will be in place within three years, starting with the two cities that flooded worst. Construction will be paid for through a pooled fund, with each city contributing according to the value of the property it protects.",
  "Residents of older harbour districts will be offered help to raise ground floors and move electrical systems upstairs. The programme is expected to finish in 2031."]},
{id:"w3",cat:"world",mins:210,read:3,views:7650,author:"Idris Vahdat",
 title:"Rail link between two capitals reopens after eleven years",
 dek:"The first passenger train made the six-hour journey on Thursday morning, cutting travel time by almost half.",
 tags:["Transport","Regional"],
 body:[
  "The first passenger train in eleven years left the northern capital at dawn on Thursday and arrived in the south six hours later. The same trip by road takes closer to eleven.",
  "The line was closed after a bridge collapse and a long dispute over who should pay for its repair. A joint operating company, owned equally by both governments, now runs the service.",
  "Tickets for the first month sold out within a day. Two daily departures will run in each direction, with a night service planned for spring."]},
{id:"w4",cat:"world",mins:380,read:3,views:4120,author:"Sara Qureshi",
 title:"Voters in three provinces back new school funding formula",
 dek:"Early counts show clear majorities for a per-pupil model that directs more money to rural classrooms.",
 tags:["Education","Elections"],
 body:[
  "Voters in three provinces have approved a new way of funding schools, according to early counts released overnight. Support topped 60 percent in each province.",
  "The formula replaces a system tied to local property values with a flat amount per pupil, plus extra funding for small schools and long bus routes.",
  "Teachers’ unions backed the change. Opponents argued it would leave wealthier districts with less to spend. Full results are due on Saturday."]},

{id:"b1",cat:"business",breaking:true,mins:40,read:4,views:15100,author:"Hannah Whitcombe",
 title:"Central banks signal slower pace of rate cuts as inflation holds above target",
 dek:"Three major institutions said further reductions will depend on services prices, which are falling more slowly than goods.",
 tags:["Markets","Inflation","Rates"],
 quote:{text:"We are closer to the destination, but the last stretch is the slowest.",by:"Policy statement, fictional central bank"},
 body:[
  "Three major central banks signalled on Thursday that interest rate cuts will come more slowly than markets had priced in. Officials pointed to services inflation, which remains stubbornly above target even as the cost of goods falls.",
  "Bond yields rose across the maturity curve after the statements, and currency markets moved in favour of the banks’ home currencies. Equity indices ended the session slightly lower.",
  "Economists said households with variable-rate mortgages should not expect quick relief. Next month’s inflation figures will be the next test."]},
{id:"b2",cat:"business",mins:150,read:3,views:5300,author:"Kofi Mensah-Ruiz",
 title:"Shipping costs fall for a fourth straight month as port backlogs clear",
 dek:"Container rates on the busiest routes are now a third lower than at their peak this spring.",
 tags:["Trade","Logistics"],
 body:[
  "The cost of moving a container between Asia and Europe has fallen for a fourth straight month, according to an index published on Thursday. Rates on the busiest routes are about a third below their spring peak.",
  "Carriers said waiting times at major ports have returned to normal after a summer of congestion. Several lines have also added capacity after taking delivery of new vessels.",
  "Retailers expect the lower costs to reach shelf prices by the new year, though analysts warned that a change in fuel costs could reverse the trend."]},
{id:"b3",cat:"business",mins:520,read:4,views:11800,author:"Priya Raman",
 title:"Four-day week pilot holds productivity steady across 60 firms",
 dek:"Employers in the six-month trial reported fewer sick days and almost no change in output.",
 tags:["Work","Productivity"],
 body:[
  "Sixty companies that moved to a four-day week for six months reported no meaningful drop in output, according to results published on Thursday. Staff took fewer sick days and resignations fell by a fifth.",
  "The firms ranged from a 12-person design studio to a manufacturer with 900 employees. Most kept pay unchanged and shortened meetings to make the time work.",
  "Not every employer was convinced. Seven of the 60 firms went back to a five-day schedule, mostly those with fixed customer service hours."]},

{id:"t1",cat:"technology",mins:62,read:5,views:21300,author:"Yuki Aranda",
 title:"Open-source group releases speech model that runs fully on a phone",
 dek:"The 300-megabyte model transcribes 40 languages without sending audio to a server.",
 tags:["AI","Privacy","Open source"],
 quote:{text:"Nothing leaves the device. That was the design goal from day one.",by:"Project maintainer"},
 body:[
  "An open-source group has released a speech recognition model small enough to run entirely on a mid-range phone. At 300 megabytes, it transcribes 40 languages and does not need an internet connection.",
  "Developers tested it on three-year-old handsets and measured transcription at about twice real-time speed. Accuracy on clear audio was close to that of larger cloud services, though it lagged on noisy recordings and heavy accents.",
  "The model is released under a permissive licence, and several note-taking and accessibility apps have already said they will adopt it. A smaller version for smart watches is planned for early next year."]},
{id:"t2",cat:"technology",mins:260,read:3,views:3900,author:"Tomás Herrera",
 title:"Cities test shared charging hubs for e-scooters and e-bikes",
 dek:"Lockable kerbside bays aim to clear pavements and cut fire risks from charging indoors.",
 tags:["Mobility","Cities"],
 body:[
  "Four cities have begun trials of kerbside hubs where riders can park and charge electric scooters and bikes. Each hub holds 20 vehicles and uses a locking dock to keep batteries from being removed.",
  "Fire services backed the idea after a rise in blazes started by batteries charged inside flats and shops. Councils also hope the hubs will cut the number of scooters left across pavements.",
  "The trials run until March. Results will decide whether the hubs are added to the national transport plan."]},
{id:"t3",cat:"technology",mins:600,read:4,views:8900,author:"Hannah Whitcombe",
 title:"New rules would require replaceable batteries in laptops by 2029",
 dek:"Draft legislation says owners should be able to swap a battery with common tools in under five minutes.",
 tags:["Regulation","Devices"],
 body:[
  "Lawmakers have published a draft rule that would require laptops sold from 2029 to have batteries that owners can replace without special tools. The draft sets a target of five minutes for the swap.",
  "Repair groups called the proposal overdue. Manufacturers said a removable design could add thickness and weight, and asked for exemptions for ultra-thin models.",
  "A public consultation on the draft opens next month and runs for 12 weeks."]},
{id:"t4",cat:"technology",breaking:true,mins:25,read:3,views:12700,author:"Sara Qureshi",
 title:"Researchers urge home router updates before year end",
 dek:"A flaw found in several widely sold models lets attackers on the same network read traffic.",
 tags:["Security","Home"],
 body:[
  "Security researchers are urging households to update their home routers after finding a flaw in several widely sold models. The weakness lets someone on the same network read unencrypted traffic.",
  "Three manufacturers have released fixes. Owners can usually install them from the router’s admin page, and many models will update automatically if that option is turned on.",
  "Researchers said there is no sign the flaw has been used in the wild. Anyone using a router more than five years old should consider replacing it."]},

{id:"s1",cat:"sports",mins:55,read:3,views:19800,author:"Kofi Mensah-Ruiz",
 title:"Late goal lifts underdogs into continental cup final",
 dek:"A header in the 89th minute settled a semi-final that looked headed for penalties.",
 tags:["Football","Cup"],
 quote:{text:"We stopped counting the minutes and just kept running.",by:"Winning captain"},
 body:[
  "A header in the 89th minute sent the underdogs into the continental cup final on Thursday night. The semi-final had been goalless for most of the second half and looked headed for penalties.",
  "The winners had been pinned back for long spells, and their goalkeeper made seven saves. The decisive chance came from a corner, which was flicked on at the near post and met at the far one.",
  "They will face the defending champions in the final next month. Tickets for the match go on sale on Monday."]},
{id:"s2",cat:"sports",mins:330,read:3,views:6400,author:"Hannah Whitcombe",
 title:"Marathon organisers add cooling stations after heat-hit race",
 dek:"More than 200 runners needed treatment on Sunday as temperatures reached 29 degrees.",
 tags:["Running","Safety"],
 body:[
  "Organisers of the city marathon will add cooling stations and move the start time earlier after Sunday’s race was held in unseasonable heat. More than 200 runners needed medical treatment as temperatures reached 29 degrees.",
  "Misting tents will be placed every five kilometres, and water stations will offer ice. The start will move 90 minutes earlier, to 7.00.",
  "A review of the race’s heat policy is due by January."]},
{id:"s3",cat:"sports",mins:700,read:3,views:10400,author:"Idris Vahdat",
 title:"Teenage sprinter breaks national 200m record at season opener",
 dek:"The 18-year-old ran 20.31 seconds, shaving 0.06 off a mark that had stood for 14 years.",
 tags:["Athletics","Record"],
 body:[
  "An 18-year-old sprinter broke the national 200 metres record at the first meeting of the season, running 20.31 seconds into a slight headwind. The previous mark had stood for 14 years.",
  "She was only fifth at the halfway point but surged on the bend and won by almost a metre. Her coach said the time was ahead of plan.",
  "She will race again in two weeks and is expected to be named in the team for next summer’s world championships."]},
{id:"s4",cat:"sports",mins:120,read:2,views:4800,author:"Tomás Herrera",
 title:"Spinners dominate day two as hosts build 80-run lead",
 dek:"Seven wickets fell before tea on a pitch that is already turning sharply.",
 tags:["Cricket","Test match"],
 body:[
  "Spin bowlers took control on the second day of the Test, claiming seven wickets before tea. The hosts lead by 80 runs with three second-innings wickets in hand.",
  "The pitch is wearing quickly, with footmarks outside the right-hander’s off stump. Batters on both sides struggled to score off the front foot.",
  "Play resumes at 9.30 tomorrow, with the visitors needing early wickets."]},

{id:"e1",cat:"entertainment",mins:180,read:4,views:13600,author:"Priya Raman",
 title:"First-time director sweeps top prizes at autumn film festival",
 dek:"A quiet drama about a family-run bakery took best film, best director and the audience award.",
 tags:["Film","Festival"],
 quote:{text:"I made it in the kitchen I grew up in. I never expected anyone else to see it.",by:"Winning director"},
 body:[
  "A first-time director took the three biggest prizes at this year’s autumn film festival on Thursday night. Her drama about a family-run bakery won best film, best director and the audience award.",
  "The film was shot over five weeks on a budget of under a million euros, using cast members who had never acted before. Jurors praised its patience and its use of sound.",
  "It opens in cinemas next month. A streaming release is planned for early next year."]},
{id:"e2",cat:"entertainment",mins:450,read:3,views:5200,author:"Yuki Aranda",
 title:"Arena tours head to smaller cities as ticket prices cool",
 dek:"Promoters say fans are skipping the biggest venues and paying less for shows closer to home.",
 tags:["Music","Live events"],
 body:[
  "Promoters are routing more arena tours through mid-sized cities as ticket prices level off after three years of steep rises. Industry figures show average prices fell 6 percent this year.",
  "Booking agents said fans are choosing shows within a two-hour drive over trips to capitals. Hotels in smaller host cities reported their busiest autumn on record.",
  "Several acts have added second nights in cities that had not hosted a major tour before."]},
{id:"e3",cat:"entertainment",mins:900,read:3,views:9700,author:"Sara Qureshi",
 title:"Lighthouse-town drama becomes the season’s surprise streaming hit",
 dek:"The eight-part series was watched for 90 million hours in its first week with almost no marketing.",
 tags:["Television","Streaming"],
 body:[
  "A slow-burning drama set in a remote lighthouse town has become the season’s most-watched new series. It was streamed for 90 million hours in its first week, with almost no promotion.",
  "Critics have compared its pace and weather to classic northern mysteries. Viewers online have spent the week arguing about the finale and the identity of the keeper.",
  "A second season has been confirmed, with filming due to start in spring."]},

{id:"sc1",cat:"science",mins:240,read:4,views:8100,author:"Lena Marković",
 title:"Survey finds dust ring around nearby star that may hide young planets",
 dek:"The ring sits about as far from its star as Neptune is from the Sun, and has a clear gap.",
 tags:["Astronomy","Exoplanets"],
 body:[
  "Astronomers have found a wide ring of dust around a young star 130 light-years away, with a clear gap that may have been cleared by planets. The ring lies roughly as far out as Neptune orbits the Sun.",
  "The team used an array of radio dishes in a desert to map the faint glow of cold dust. Computer models suggest a gap that sharp would need at least two planets, each several times heavier than Earth.",
  "Follow-up observations are planned for next year to look for the planets directly."]},
{id:"sc2",cat:"science",mins:1500,read:3,views:6900,author:"Idris Vahdat",
 title:"Deep-sea mapping project charts 40,000 square kilometres of seabed",
 dek:"The survey found more than 300 undersea mountains that did not appear on earlier charts.",
 tags:["Oceans","Mapping"],
 body:[
  "A deep-sea mapping project has charted 40,000 square kilometres of seabed that had never been surveyed in detail. The area is roughly the size of Switzerland.",
  "Crews found more than 300 undersea mountains, some rising 2 kilometres above the plain. Many are expected to be rich in marine life.",
  "The data will be released free to researchers and to the public next spring."]},

{id:"h1",cat:"health",mins:135,read:3,views:14200,author:"Hannah Whitcombe",
 title:"Daily 20-minute walks linked to fewer back pain relapses",
 dek:"A study of 700 adults found those who walked regularly went almost twice as long before pain returned.",
 tags:["Fitness","Back pain"],
 body:[
  "Adults who walked for 20 minutes a day went almost twice as long before their back pain returned, according to a study of 700 people. Researchers followed the group for up to three years.",
  "The walkers did not need expensive equipment or supervised sessions. Those who also did two short strengthening routines a week saw a further small benefit.",
  "The authors cautioned that the study could not prove walking was the cause. People with new or severe pain should still see a doctor."]},
{id:"h2",cat:"health",mins:800,read:4,views:7300,author:"Priya Raman",
 title:"Hospitals trial AI-assisted triage to shorten emergency waits",
 dek:"Five emergency departments are testing software that flags patients likely to need urgent attention.",
 tags:["Hospitals","AI"],
 body:[
  "Five emergency departments have begun testing software that helps nurses decide which patients need to be seen first. The tool reads the notes taken at arrival and flags those at higher risk.",
  "Early figures show median waits for the most urgent cases fell by about eight minutes. Nurses still make the final decision, and every flag is reviewed by a senior member of staff.",
  "A patient group welcomed the trial but asked for clear reporting on how the software performs for older people and for those who do not speak the local language."]}
];

/* ---------- mock API ---------- */
var api={
  _cache:null,
  list:function(){
    var self=this;
    if(self._cache) return Promise.resolve(self._cache);
    return new Promise(function(res){
      setTimeout(function(){
        self._cache=ARTICLES.map(function(a){return Object.assign({},a)});
        res(self._cache);
      },220);
    });
  }
};

/* ---------- helpers ---------- */
var app=document.getElementById("app");
var state={articles:null,q:"",first:true,seq:0};
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]})}
function catOf(slug){return CATS.filter(function(c){return c.slug===slug})[0]}
function ago(m){return m<60?m+" min ago":m<1440?Math.round(m/60)+"h ago":Math.round(m/1440)+"d ago"}
function byNew(a,b){return a.mins-b.mins}
function stamp(m){
  try{return new Date(Date.now()-m*60000).toLocaleString("en-GB",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}
  catch(e){return ago(m)}
}
function mq(q){return typeof window.matchMedia==="function"?window.matchMedia(q).matches:false}

/* ---------- generated thumbnails ---------- */
function hash(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function rng(seed){var t=seed>>>0;return function(){t+=0x6D2B79F5;var r=Math.imul(t^t>>>15,1|t);r^=r+Math.imul(r^r>>>7,61|r);return((r^r>>>14)>>>0)/4294967296}}
var PAL={world:["#0E2A5C","#1B6CA8","#BFE3FF"],business:["#123A2C","#2E7D5B","#CFF5E0"],technology:["#2A1A5E","#5B3FD1","#E1D9FF"],sports:["#5C1F0E","#D4561F","#FFE3D1"],entertainment:["#4A0F3B","#C23B8A","#FFD9EE"],science:["#0A1A33","#1E3F7A","#FFE9A8"],health:["#0F3B3F","#1F9AA5","#D5FBFF"]};
var artCache={};
function art(a){
  if(artCache[a.id]) return artCache[a.id];
  var p=PAL[a.cat],f=p[2],r=rng(hash(a.id)),s="",i,x,y;
  if(a.cat==="world"){
    for(i=0;i<7;i++) s+='<ellipse cx="200" cy="125" rx="'+(26+i*30)+'" ry="150" fill="none" stroke="'+f+'" stroke-opacity=".28" stroke-width="2"/>';
    for(i=1;i<6;i++) s+='<line x1="0" x2="400" y1="'+(i*42)+'" y2="'+(i*42)+'" stroke="'+f+'" stroke-opacity=".16"/>';
    s+='<circle cx="'+(80+r()*240).toFixed(0)+'" cy="'+(50+r()*150).toFixed(0)+'" r="9" fill="'+f+'"/>';
  }else if(a.cat==="business"){
    var h=70;
    for(i=0;i<10;i++){h=Math.max(30,Math.min(190,h+(r()-.38)*60));s+='<rect x="'+(24+i*37)+'" y="'+(230-h).toFixed(0)+'" width="26" height="'+h.toFixed(0)+'" fill="'+f+'" fill-opacity="'+(.22+i*.05).toFixed(2)+'"/>'}
    s+='<line x1="16" x2="384" y1="230" y2="230" stroke="'+f+'" stroke-opacity=".6" stroke-width="2"/>';
  }else if(a.cat==="technology"){
    var pts=[];
    for(y=0;y<4;y++)for(x=0;x<7;x++)pts.push([50+x*50+(r()-.5)*18,40+y*55+(r()-.5)*18]);
    for(i=0;i<pts.length;i++){var j=Math.min(pts.length-1,i+1+Math.floor(r()*7));s+='<line x1="'+pts[i][0].toFixed(0)+'" y1="'+pts[i][1].toFixed(0)+'" x2="'+pts[j][0].toFixed(0)+'" y2="'+pts[j][1].toFixed(0)+'" stroke="'+f+'" stroke-opacity=".3" stroke-width="1.5"/>'}
    for(i=0;i<pts.length;i++)s+='<circle cx="'+pts[i][0].toFixed(0)+'" cy="'+pts[i][1].toFixed(0)+'" r="'+(3+r()*4).toFixed(1)+'" fill="'+f+'" fill-opacity=".85"/>';
  }else if(a.cat==="sports"){
    for(i=-2;i<9;i++) s+='<line x1="'+(i*60)+'" y1="270" x2="'+(i*60+150)+'" y2="-20" stroke="'+f+'" stroke-opacity=".18" stroke-width="22"/>';
    s+='<circle cx="'+(90+r()*220).toFixed(0)+'" cy="'+(60+r()*130).toFixed(0)+'" r="17" fill="'+f+'"/>';
  }else if(a.cat==="entertainment"){
    for(i=0;i<13;i++){var ang=(-70+i*11.6)*Math.PI/180;s+='<line x1="200" y1="270" x2="'+(200+Math.tan(ang)*280).toFixed(0)+'" y2="-10" stroke="'+f+'" stroke-opacity=".16" stroke-width="16"/>'}
    s+='<circle cx="200" cy="262" r="64" fill="'+f+'" fill-opacity=".35"/>';
  }else if(a.cat==="science"){
    for(i=0;i<46;i++) s+='<circle cx="'+(r()*400).toFixed(0)+'" cy="'+(r()*250).toFixed(0)+'" r="'+(.6+r()*1.6).toFixed(1)+'" fill="#fff" fill-opacity="'+(.4+r()*.5).toFixed(2)+'"/>';
    var rot=(r()*50-25).toFixed(0);
    s+='<ellipse cx="200" cy="125" rx="150" ry="48" fill="none" stroke="'+f+'" stroke-opacity=".5" stroke-width="2" transform="rotate('+rot+' 200 125)"/>';
    s+='<circle cx="200" cy="125" r="26" fill="'+f+'"/>';
  }else{
    for(i=1;i<6;i++) s+='<circle cx="200" cy="125" r="'+(i*30)+'" fill="none" stroke="'+f+'" stroke-opacity=".16" stroke-width="2"/>';
    s+='<polyline points="0,135 120,135 145,135 160,78 180,192 200,108 215,135 400,135" fill="none" stroke="'+f+'" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>';
  }
  var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+p[0]+'"/><stop offset="1" stop-color="'+p[1]+'"/></linearGradient></defs><rect width="400" height="250" fill="url(#g)"/>'+s+'</svg>';
  artCache[a.id]="data:image/svg+xml;utf8,"+encodeURIComponent(svg);
  return artCache[a.id];
}

/* ---------- view pieces ---------- */
function card(a,o){
  o=o||{};var v=o.variant||"card",dek=o.dek!==false;
  return '<a class="'+v+'" href="#a-'+a.id+'"><span class="thumb"><img src="'+art(a)+'" alt="" width="400" height="250" loading="lazy"></span><span class="txt"><span class="kicker">'+esc(catOf(a.cat).name)+'</span><h3 class="hl">'+esc(a.title)+'</h3>'+(dek?'<span class="dek">'+esc(a.dek)+'</span>':'')+'<span class="when">'+ago(a.mins)+'</span></span></a>';
}
function secHead(title,link){
  return '<div class="sec-head"><h2>'+esc(title)+'</h2>'+(link?'<a href="'+link.href+'">'+esc(link.text)+'</a>':'')+'</div>';
}

/* ---------- views ---------- */
function viewHome(){
  var A=state.articles;
  var lead=A.filter(function(a){return a.featured})[0]||A[0];
  var sideIds=["t1","b1","s1"];
  var side=sideIds.map(function(id){return A.filter(function(a){return a.id===id})[0]}).filter(Boolean);
  var used={};used[lead.id]=1;side.forEach(function(a){used[a.id]=1});
  var latest=A.slice().sort(byNew).filter(function(a){return !used[a.id]}).slice(0,6);
  var top=A.slice().sort(function(a,b){return b.views-a.views}).slice(0,5);
  var h='';
  h+='<div class="top"><article class="lead"><a href="#a-'+lead.id+'" style="display:contents">';
  h+='<span class="thumb"><img src="'+art(lead)+'" alt="" width="400" height="250"></span>';
  h+='<span class="txt" style="gap:12px"><span class="kicker">'+esc(catOf(lead.cat).name)+' &middot; Top story</span><h1 class="hl">'+esc(lead.title)+'</h1><span class="dek">'+esc(lead.dek)+'</span><span class="when">'+ago(lead.mins)+' &middot; '+lead.read+' min read</span></span></a></article>';
  h+='<div class="stack" aria-label="More top stories">'+side.map(function(a){return card(a,{variant:"compact",dek:false})}).join('')+'</div></div>';
  h+='<div class="cols"><section>'+secHead("Latest",null)+'<div class="stack">'+latest.map(function(a){return card(a,{variant:"row"})}).join('')+'</div></section>';
  h+='<aside>'+secHead("Most read",null)+'<ol class="rank">'+top.map(function(a){return '<li><a href="#a-'+a.id+'"><h3 class="hl">'+esc(a.title)+'</h3><span class="when">'+esc(catOf(a.cat).name)+' &middot; '+a.views.toLocaleString("en-GB")+' reads</span></a></li>'}).join('')+'</ol></aside></div>';
  CATS.forEach(function(c){
    var items=A.filter(function(a){return a.cat===c.slug}).sort(byNew).slice(0,3);
    if(!items.length)return;
    h+='<section class="block" aria-label="'+esc(c.name)+'">'+secHead(c.name,{href:"#c-"+c.slug,text:"See all"})+'<div class="grid" style="--n:'+items.length+'">'+items.map(function(a){return card(a)}).join('')+'</div></section>';
  });
  return {html:h,title:"Meridian Wire"};
}

function viewCategory(slug){
  var c=catOf(slug);
  if(!c) return viewMissing();
  var items=state.articles.filter(function(a){return a.cat===slug}).sort(byNew);
  var lead=items[0],rest=items.slice(1);
  var h='<header class="page-head"><h1>'+esc(c.name)+'</h1><p>'+esc(c.blurb)+'</p><span class="count">'+items.length+' stories</span></header>';
  if(lead){
    h+='<article class="cat-lead"><a href="#a-'+lead.id+'"><span class="thumb"><img src="'+art(lead)+'" alt="" width="400" height="250"></span><span class="txt" style="gap:12px;align-self:center"><span class="kicker">Latest in '+esc(c.name)+'</span><h2 class="hl">'+esc(lead.title)+'</h2><span class="dek">'+esc(lead.dek)+'</span><span class="when">'+ago(lead.mins)+' &middot; '+lead.read+' min read</span></span></a></article>';
  }
  if(rest.length){
    h+='<div class="stack" style="margin-bottom:40px">'+rest.map(function(a){return card(a,{variant:"row"})}).join('')+'</div>';
  }
  return {html:h,title:c.name};
}

function viewArticle(id){
  var A=state.articles;
  var a=A.filter(function(x){return x.id===id})[0];
  if(!a) return viewMissing();
  var c=catOf(a.cat);
  var inCat=A.filter(function(x){return x.cat===a.cat}).sort(byNew);
  var idx=inCat.map(function(x){return x.id}).indexOf(a.id);
  var prev=inCat[idx-1],next=inCat[idx+1];
  var rel=inCat.filter(function(x){return x.id!==a.id});
  var others=A.filter(function(x){return x.cat!==a.cat}).sort(byNew);
  var related=rel.concat(others).slice(0,5);
  var body='';
  a.body.forEach(function(p,i){
    body+='<p'+(i===0?' class="lede"':'')+'>'+esc(p)+'</p>';
    if(i===1&&a.quote) body+='<blockquote><p>&ldquo;'+esc(a.quote.text)+'&rdquo;</p>'+esc(a.quote.by)+'</blockquote>';
  });
  var h='';
  h+='<nav class="crumbs" aria-label="Breadcrumb"><a href="#home">Home</a><span aria-hidden="true">/</span><a href="#c-'+c.slug+'">'+esc(c.name)+'</a></nav>';
  h+='<div class="art-grid"><article class="art-main"><header class="art-head"><span class="kicker">'+esc(c.name)+'</span><h1>'+esc(a.title)+'</h1><p class="dek">'+esc(a.dek)+'</p>';
  h+='<div class="byline"><span>By <strong>'+esc(a.author)+'</strong></span><span>'+esc(stamp(a.mins))+'</span><span>'+a.read+' min read</span></div></header>';
  h+='<figure class="art-fig"><div class="thumb"><img src="'+art(a)+'" alt="" width="400" height="250"></div><figcaption>Illustration for this story. Sample content.</figcaption></figure>';
  h+='<div class="prose">'+body+'</div>';
  h+='<div class="tags" aria-label="Topics">'+a.tags.map(function(t){return '<span>'+esc(t)+'</span>'}).join('')+'</div>';
  h+='<div class="share"><label for="share-url">Share</label><input id="share-url" type="text" readonly value="'+esc(location.href)+'"><button type="button" data-copy="share-url">Copy link</button></div>';
  h+='<nav class="pn" aria-label="More in '+esc(c.name)+'">'+(prev?'<a href="#a-'+prev.id+'"><span class="lbl">Newer in '+esc(c.name)+'</span><span class="hl">'+esc(prev.title)+'</span></a>':'<span class="only">You are reading the newest '+esc(c.name.toLowerCase())+' story.</span>')+(next?'<a href="#a-'+next.id+'"><span class="lbl">Older in '+esc(c.name)+'</span><span class="hl">'+esc(next.title)+'</span></a>':'<span class="only">This is the oldest '+esc(c.name.toLowerCase())+' story here.</span>')+'</nav>';
  h+='</article>';
  h+='<aside class="side"><h2>Related coverage</h2><ul class="related">'+related.map(function(x){return '<li><a href="#a-'+x.id+'"><span class="kicker">'+esc(catOf(x.cat).name)+'</span><span class="hl">'+esc(x.title)+'</span><span class="when">'+ago(x.mins)+'</span></a></li>'}).join('')+'</ul></aside></div>';
  return {html:h,title:a.title};
}

function viewSearch(){
  var q=state.q.trim(),ql=q.toLowerCase();
  var res=ql?state.articles.filter(function(a){
    return (a.title+" "+a.dek+" "+a.tags.join(" ")+" "+a.body.join(" ")).toLowerCase().indexOf(ql)>-1;
  }).sort(byNew):[];
  var h='<header class="page-head"><h1>Search</h1><p>'+(q?'Results for &ldquo;'+esc(q)+'&rdquo;':'Type a word above to search every story.')+'</p>'+(q?'<span class="count">'+res.length+(res.length===1?' story':' stories')+'</span>':'')+'</header>';
  if(res.length){
    h+='<div class="stack" style="margin-bottom:40px">'+res.map(function(a){return card(a,{variant:"row"})}).join('')+'</div>';
  }else{
    h+='<div class="empty"><p>'+(q?'No stories match that search. Try a shorter word, or browse a section.':'Browse a section instead.')+'</p><ul>'+CATS.map(function(c){return '<li><a href="#c-'+c.slug+'">'+esc(c.name)+'</a></li>'}).join('')+'</ul></div>';
  }
  return {html:h,title:"Search"};
}

function viewMissing(){
  return {title:"Not found",html:'<header class="page-head"><h1>Not found</h1><p>That page is not on Meridian Wire. It may have been moved.</p></header><div class="empty"><ul><li><a href="#home">Go to the front page</a></li>'+CATS.map(function(c){return '<li><a href="#c-'+c.slug+'">'+esc(c.name)+'</a></li>'}).join('')+'</ul></div>'};
}

/* ---------- router ---------- */
function parse(){
  var h=(location.hash||"").replace(/^#/,"");
  if(h.indexOf("a-")===0) return {name:"article",arg:h.slice(2)};
  if(h.indexOf("c-")===0) return {name:"category",arg:h.slice(2)};
  if(h==="search") return {name:"search"};
  return {name:"home"};
}

function setNav(r){
  var links=document.querySelectorAll("#nav a");
  var active="home";
  if(r.name==="category") active=r.arg;
  if(r.name==="article"){
    var a=ARTICLES.filter(function(x){return x.id===r.arg})[0];
    active=a?a.cat:"";
  }
  if(r.name==="search") active="";
  for(var i=0;i<links.length;i++){
    if(links[i].getAttribute("data-k")===active) links[i].setAttribute("aria-current","page");
    else links[i].removeAttribute("aria-current");
  }
}

function skeleton(){
  app.innerHTML='<div class="skel" aria-hidden="true"><i style="height:300px"></i><i style="height:34px;width:70%"></i><i style="height:16px;width:50%"></i></div>';
}

function render(){
  var my=++state.seq;
  var r=parse();
  setNav(r);
  var qi=document.getElementById("q");
  if(r.name==="search"&&qi) qi.value=state.q;
  var go=function(){
    if(my!==state.seq) return;
    var v;
    if(r.name==="article") v=viewArticle(r.arg);
    else if(r.name==="category") v=viewCategory(r.arg);
    else if(r.name==="search") v=viewSearch();
    else v=viewHome();
    app.innerHTML=v.html;
    document.title=v.title==="Meridian Wire"?"Meridian Wire":v.title+" | Meridian Wire";
    try{window.scrollTo(0,0)}catch(e){}
    if(!state.first){
      var h1=app.querySelector("h1");
      if(h1){h1.setAttribute("tabindex","-1");try{h1.focus({preventScroll:true})}catch(e){}}
    }
    state.first=false;
  };
  if(state.articles){go();return}
  skeleton();
  api.list().then(function(list){state.articles=list;go()});
}

/* ---------- chrome ---------- */
function buildChrome(){
  var nav='<li><a href="#home" data-k="home">Home</a></li>'+CATS.map(function(c){return '<li><a href="#c-'+c.slug+'" data-k="'+c.slug+'">'+esc(c.name)+'</a></li>'}).join('');
  document.getElementById("nav").innerHTML=nav;
  document.getElementById("foot-nav").innerHTML='<li><a href="#home">Front page</a></li>'+CATS.map(function(c){return '<li><a href="#c-'+c.slug+'">'+esc(c.name)+'</a></li>'}).join('');
  try{document.getElementById("today").textContent=new Date().toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}catch(e){}
}

function startTicker(){
  var br=ARTICLES.filter(function(a){return a.breaking}),i=0,el=document.getElementById("tick");
  function show(){var a=br[i%br.length];el.textContent=a.title;el.setAttribute("href","#a-"+a.id)}
  show();
  if(!mq("(prefers-reduced-motion: reduce)")) setInterval(function(){i++;show()},6000);
}

function effectiveTheme(){
  var t=document.documentElement.getAttribute("data-theme");
  if(t) return t;
  return mq("(prefers-color-scheme: dark)")?"dark":"light";
}
function paintThemeButton(){
  var b=document.getElementById("theme");
  b.textContent=effectiveTheme()==="dark"?"Light mode":"Dark mode";
}
function initTheme(){
  try{var s=localStorage.getItem("mw-theme");if(s==="dark"||s==="light")document.documentElement.setAttribute("data-theme",s)}catch(e){}
  paintThemeButton();
  document.getElementById("theme").addEventListener("click",function(){
    var n=effectiveTheme()==="dark"?"light":"dark";
    document.documentElement.setAttribute("data-theme",n);
    try{localStorage.setItem("mw-theme",n)}catch(e){}
    paintThemeButton();
  });
}

document.getElementById("sf").addEventListener("submit",function(e){
  e.preventDefault();
  state.q=document.getElementById("q").value;
  if(parse().name==="search") render(); else location.hash="search";
});

document.addEventListener("click",function(e){
  var b=e.target.closest&&e.target.closest("[data-copy]");
  if(!b) return;
  var inp=document.getElementById(b.getAttribute("data-copy"));
  inp.value=location.href;
  var done=function(){b.textContent="Copied";setTimeout(function(){b.textContent="Copy link"},1800)};
  var fail=function(){inp.focus();inp.select();b.textContent="Press Ctrl+C";setTimeout(function(){b.textContent="Copy link"},2400)};
  try{
    if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(location.href).then(done,fail);
    else fail();
  }catch(err){fail()}
});

window.addEventListener("hashchange",render);
buildChrome();initTheme();startTicker();render();
})();