const interests = [
  { value: "3D printing", label: "3D printing" },
  { value: "Amateur radio", label: "Amateur radio" },
  { value: "Acting", label: "Acting" },
  { value: "Baton twirling", label: "Baton twirling" },
  { value: "Board games", label: "Board games" },
  { value: "Book restoration", label: "Book restoration" },
  { value: "Cabaret", label: "Cabaret" },
  { value: "Calligraphy", label: "Calligraphy" },
  { value: "Candle making", label: "Candle making" },
  { value: "Computer programming", label: "Computer programming" },
  { value: "Coffee roasting", label: "Coffee roasting" },
  { value: "Cooking", label: "Cooking" },
  { value: "Colouring", label: "Colouring" },
  { value: "Cosplaying", label: "Cosplaying" },
  { value: "Couponing", label: "Couponing" },
  { value: "Creative writing", label: "Creative writing" },
  { value: "Crocheting", label: "Crocheting" },
  { value: "Cryptography", label: "Cryptography" },
  { value: "Dance", label: "Dance" },
  { value: "Digital arts", label: "Digital arts" },
  { value: "Drama", label: "Drama" },
  { value: "Drawing", label: "Drawing" },
  { value: "Do it yourself", label: "Do it yourself" },
  { value: "Electronics", label: "Electronics" },
  { value: "Embroidery", label: "Embroidery" },
  { value: "Fashion", label: "Fashion" },
  { value: "Flower arranging", label: "Flower arranging" },
  { value: "Foreign languages", label: "Foreign languages" },
  { value: "Gaming", label: "Gaming" },
  { value: "Tabletop games", label: "Tabletop games" },
  { value: "Role-playing games", label: "Role-playing games" },
  { value: "Gambling", label: "Gambling" },
  { value: "Genealogy", label: "Genealogy" },
  { value: "Glassblowing", label: "Glassblowing" },
  { value: "Gunsmithing", label: "Gunsmithing" },
  { value: "Homebrewing", label: "Homebrewing" },
  { value: "Ice skating", label: "Ice skating" },
  { value: "Jewelry making", label: "Jewelry making" },
  { value: "Jigsaw puzzles", label: "Jigsaw puzzles" },
  { value: "Juggling", label: "Juggling" },
  { value: "Knapping", label: "Knapping" },
  { value: "Knitting", label: "Knitting" },
  { value: "Kabaddi", label: "Kabaddi" },
  { value: "Knife making", label: "Knife making" },
  { value: "Lacemaking", label: "Lacemaking" },
  { value: "Lapidary", label: "Lapidary" },
  { value: "Leather crafting", label: "Leather crafting" },
  { value: "Lego building", label: "Lego building" },
  { value: "Lockpicking", label: "Lockpicking" },
  { value: "Machining", label: "Machining" },
  { value: "Macrame", label: "Macrame" },
  { value: "Metalworking", label: "Metalworking" },
  { value: "Magic", label: "Magic" },
  { value: "Model building", label: "Model building" },
  { value: "Listening to music", label: "Listening to music" },
  { value: "Origami", label: "Origami" },
  { value: "Painting", label: "Painting" },
  {
    value: "Playing musical instruments",
    label: "Playing musical instruments",
  },
  { value: "Pet", label: "Pet" },
  { value: "Poi", label: "Poi" },
  { value: "Pottery", label: "Pottery" },
  { value: "Puzzles", label: "Puzzles" },
  { value: "Quilting", label: "Quilting" },
  { value: "Reading", label: "Reading" },
  { value: "Scrapbooking", label: "Scrapbooking" },
  { value: "Sculpting", label: "Sculpting" },
  { value: "Sewing", label: "Sewing" },
  { value: "Singing", label: "Singing" },
  { value: "Sketching", label: "Sketching" },
  { value: "Soapmaking", label: "Soapmaking" },
  { value: "Sports", label: "Sports" },
  { value: "Stand-up comedy", label: "Stand-up comedy" },
  { value: "Sudoku", label: "Sudoku" },
  { value: "Table tennis", label: "Table tennis" },
  { value: "Taxidermy", label: "Taxidermy" },
  { value: "Video gaming", label: "Video gaming" },
  { value: "Watching movies", label: "Watching movies" },
  { value: "Web surfing", label: "Web surfing" },
  { value: "Whittling", label: "Whittling" },
  { value: "Wood carving", label: "Wood carving" },
  { value: "Woodworking", label: "Woodworking" },
  { value: "World Building", label: "World Building" },
  { value: "Writing", label: "Writing" },
  { value: "Yoga", label: "Yoga" },
  { value: "Yo-yoing", label: "Yo-yoing" },
  { value: "Air sports", label: "Air sports" },
  { value: "Archery", label: "Archery" },
  { value: "Astronomy", label: "Astronomy" },
  { value: "Backpacking", label: "Backpacking" },
  { value: "Base jumping", label: "Base jumping" },
  { value: "Baseball", label: "Baseball" },
  { value: "Basketball", label: "Basketball" },
  { value: "Beekeeping", label: "Beekeeping" },
  { value: "Bird watching", label: "Bird watching" },
  { value: "Blacksmithing", label: "Blacksmithing" },
  { value: "Board sports", label: "Board sports" },
  { value: "Bodybuilding", label: "Bodybuilding" },
  { value: "Brazilian jiu-jitsu", label: "Brazilian jiu-jitsu" },
  { value: "Community", label: "Community" },
  { value: "Cycling", label: "Cycling" },
  { value: "Dowsing", label: "Dowsing" },
  { value: "Driving", label: "Driving" },
  { value: "Fishing", label: "Fishing" },
  { value: "Flag football", label: "Flag football" },
  { value: "Flying", label: "Flying" },
  { value: "Flying disc", label: "Flying disc" },
  { value: "Foraging", label: "Foraging" },
  { value: "Gardening", label: "Gardening" },
  { value: "Geocaching", label: "Geocaching" },
  { value: "Ghost hunting", label: "Ghost hunting" },
  { value: "Graffiti", label: "Graffiti" },
  { value: "Handball", label: "Handball" },
  { value: "Hiking", label: "Hiking" },
  { value: "Hooping", label: "Hooping" },
  { value: "Horseback riding", label: "Horseback riding" },
  { value: "Hunting", label: "Hunting" },
  { value: "Inline skating", label: "Inline skating" },
  { value: "Jogging", label: "Jogging" },
  { value: "Kayaking", label: "Kayaking" },
  { value: "Kite flying", label: "Kite flying" },
  { value: "Kitesurfing", label: "Kitesurfing" },
  { value: "Larping", label: "Larping" },
  { value: "Letterboxing", label: "Letterboxing" },
  { value: "Metal detecting", label: "Metal detecting" },
  { value: "Motor sports", label: "Motor sports" },
  { value: "Mountain biking", label: "Mountain biking" },
  { value: "Mountaineering", label: "Mountaineering" },
  { value: "Mushroom hunting", label: "Mushroom hunting" },
  { value: "Mycology", label: "Mycology" },
  { value: "Netball", label: "Netball" },
  { value: "Nordic skating", label: "Nordic skating" },
  { value: "Orienteering", label: "Orienteering" },
  { value: "Paintball", label: "Paintball" },
  { value: "Parkour", label: "Parkour" },
  { value: "Photography", label: "Photography" },
  { value: "Polo", label: "Polo" },
  { value: "Rafting", label: "Rafting" },
  { value: "Rappelling", label: "Rappelling" },
  { value: "Rock climbing", label: "Rock climbing" },
  { value: "Roller skating", label: "Roller skating" },
  { value: "Rugby", label: "Rugby" },
  { value: "Running", label: "Running" },
  { value: "Sailing", label: "Sailing" },
  { value: "Sand art", label: "Sand art" },
  { value: "Scouting", label: "Scouting" },
  { value: "Scuba diving", label: "Scuba diving" },
  { value: "Sculling", label: "Sculling" },
  { value: "Rowing", label: "Rowing" },
  { value: "Shooting", label: "Shooting" },
  { value: "Shopping", label: "Shopping" },
  { value: "Skateboarding", label: "Skateboarding" },
  { value: "Skiing", label: "Skiing" },
  { value: "Skim Boarding", label: "Skim Boarding" },
  { value: "Skydiving", label: "Skydiving" },
  { value: "Slacklining", label: "Slacklining" },
  { value: "Snowboarding", label: "Snowboarding" },
  { value: "Stone skipping", label: "Stone skipping" },
  { value: "Surfing", label: "Surfing" },
  { value: "Swimming", label: "Swimming" },
  { value: "Taekwondo", label: "Taekwondo" },
  { value: "Tai chi", label: "Tai chi" },
  { value: "Urban exploration", label: "Urban exploration" },
  { value: "Vacation", label: "Vacation" },
  { value: "Vehicle restoration", label: "Vehicle restoration" },
  { value: "Water sports", label: "Water sports" },
];

export default interests;
