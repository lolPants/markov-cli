// Input Data
// Taken from https://www.theonion.com/ headlines
const testInput = [
  'Mother Annoyed Son Playing Video Games On Beautiful Day When He Could Go Outside To Kill People',
  'Signs Make Upcoming Section Of Road Sound Pretty Badass',
  'Millions Of White Nationalists Gather In Streets, Offices Around Country To Normally Go About Day',
  'Trump Condemns White House Staffers’ Use Of Secret Recording Studio',
  'Sarah Huckabee Sanders Unable To Answer Any Questions About Administration After Signing Non-Disclosure Agreement',
  'Area Man Would Have Done Things Differently If He Were Killer In Movie',
  'Orca Mother Carries Around Dead Calf For Two Weeks As Warning To All Who Would Defy Her',
  'Unhinged Man With Jackhammer Slips Into Construction Site Undetected',
  '30-Year-Old Loser Still Hanging Around Teen Choice Awards',
  '2018 Election Has Record Number Of Women Nominees',
  'Former Trump Lawyer Michael Cohen Under Investigation For Tax Fraud',
  'New Stardew Valley Expansion Allows Player To Shoot Self In Barn After Family Farm Bankrupted By Corporate Agribusiness',
  'Courageous Heterosexual Has Never Donated Blood To Red Cross In Solidarity With Gay Men',
  'Calumet Farms Unveils New Tandem Horse For Couples Riding',
  'Scouts Highly Doubtful Tim Tebow Will Ever Make It To Heaven',
  'Mueller Scrambling After Accidentally Spilling Whole Big Gulp All Over Russia Evidence',
  'Pros And Cons Of Using Images Of Deceased People Onscreen',
  'Elderly Woman Spends Day In Park Feeding Pigeons Dismembered Husband',
  'Driver Swerves To Avoid Deer Standing Right In Middle Of Zoo',
  'Struggling Used Bookstore Has Tried Everything But Organizing Books By Genre And Author',
  'Doctor Informs Woman She Pregnant As Hell',
  'Oscars Committee Announces Plan To Shorten Ceremony To Single Millisecond Flash Of Blinding White Light',
  'Report Finds Letting Stranger Bum Cigarette Sole Act Of Human Compassion Still In Practice',
  'Shy Congressman Wishes Other Lawmakers Would Include Him In Their Crimes',
]

const testModel = {"Mother":{"start":true,"next":{"Annoyed":1},"count":1},"Annoyed":{"start":false,"next":{"Son":1},"count":0},"Son":{"start":false,"next":{"Playing":1},"count":0},"Playing":{"start":false,"next":{"Video":1},"count":0},"Video":{"start":false,"next":{"Games":1},"count":0},"Games":{"start":false,"next":{"On":1},"count":0},"On":{"start":false,"next":{"Beautiful":1},"count":0},"Beautiful":{"start":false,"next":{"Day":1},"count":0},"Day":{"start":false,"next":{"When":1},"count":0},"When":{"start":false,"next":{"He":1},"count":0},"He":{"start":false,"next":{"Could":1},"count":0},"Could":{"start":false,"next":{"Go":1},"count":0},"Go":{"start":false,"next":{"Outside":1},"count":0},"Outside":{"start":false,"next":{"To":1},"count":0},"To":{"start":false,"next":{"Kill":1},"count":0},"Kill":{"start":false,"next":{"People":1},"count":0},"People":{"start":false,"next":{"\n":1},"count":0},"Signs":{"start":true,"next":{"Make":1},"count":1},"Make":{"start":false,"next":{"Upcoming":1},"count":0},"Upcoming":{"start":false,"next":{"Section":1},"count":0},"Section":{"start":false,"next":{"Of":1},"count":0},"Of":{"start":false,"next":{"Road":1},"count":0},"Road":{"start":false,"next":{"Sound":1},"count":0},"Sound":{"start":false,"next":{"Pretty":1},"count":0},"Pretty":{"start":false,"next":{"Badass":1},"count":0},"Badass":{"start":false,"next":{"\n":1},"count":0}} // eslint-disable-line
const testMapped = [{"start":true,"next":[{"token":"Annoyed","weight":1}],"count":1,"token":"Mother"},{"start":false,"next":[{"token":"Son","weight":1}],"count":0,"token":"Annoyed"},{"start":false,"next":[{"token":"Playing","weight":1}],"count":0,"token":"Son"},{"start":false,"next":[{"token":"Video","weight":1}],"count":0,"token":"Playing"},{"start":false,"next":[{"token":"Games","weight":1}],"count":0,"token":"Video"},{"start":false,"next":[{"token":"On","weight":1}],"count":0,"token":"Games"},{"start":false,"next":[{"token":"Beautiful","weight":1}],"count":0,"token":"On"},{"start":false,"next":[{"token":"Day","weight":1}],"count":0,"token":"Beautiful"},{"start":false,"next":[{"token":"When","weight":1}],"count":0,"token":"Day"},{"start":false,"next":[{"token":"He","weight":1}],"count":0,"token":"When"},{"start":false,"next":[{"token":"Could","weight":1}],"count":0,"token":"He"},{"start":false,"next":[{"token":"Go","weight":1}],"count":0,"token":"Could"},{"start":false,"next":[{"token":"Outside","weight":1}],"count":0,"token":"Go"},{"start":false,"next":[{"token":"To","weight":1}],"count":0,"token":"Outside"},{"start":false,"next":[{"token":"Kill","weight":1}],"count":0,"token":"To"},{"start":false,"next":[{"token":"People","weight":1}],"count":0,"token":"Kill"},{"start":false,"next":[{"token":"\n","weight":1}],"count":0,"token":"People"},{"start":true,"next":[{"token":"Make","weight":1}],"count":1,"token":"Signs"},{"start":false,"next":[{"token":"Upcoming","weight":1}],"count":0,"token":"Make"},{"start":false,"next":[{"token":"Section","weight":1}],"count":0,"token":"Upcoming"},{"start":false,"next":[{"token":"Of","weight":1}],"count":0,"token":"Section"},{"start":false,"next":[{"token":"Road","weight":1}],"count":0,"token":"Of"},{"start":false,"next":[{"token":"Sound","weight":1}],"count":0,"token":"Road"},{"start":false,"next":[{"token":"Pretty","weight":1}],"count":0,"token":"Sound"},{"start":false,"next":[{"token":"Badass","weight":1}],"count":0,"token":"Pretty"},{"start":false,"next":[{"token":"\n","weight":1}],"count":0,"token":"Badass"}] // eslint-disable-line

module.exports = { testInput, testModel, testMapped }
