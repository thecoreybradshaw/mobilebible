// plans.js — Data Store for All Bible Reading Plans

const READING_PLANS = {
  fiveday: {
    title: "5-Day Bible Reading Program",
    description: "The official fivedaybiblereading.com plan with 5 readings per week and 2 flex days.",
    weeks: [
      {
        week: 1,
        title: "Week 1",
        days: [
          { day: 1, label: 'Genesis 1-2; Psalm 19; Mark 1', book: 'Genesis', chapter: 1 },
          { day: 2, label: 'Gen 3-5; Mark 2', book: 'Genesis', chapter: 3 },
          { day: 3, label: 'Gen 6-8; Psalm 104; Mark 3', book: 'Genesis', chapter: 6 },
          { day: 4, label: 'Gen 9-11; Mark 4', book: 'Genesis', chapter: 9 },
          { day: 5, label: 'Gen 12-15; Psalm 148; Mark 5', book: 'Genesis', chapter: 12 }
        ]
      },
      {
        week: 2,
        title: "Week 2",
        days: [
          { day: 6, label: 'Genesis 16-18; Mark 6', book: 'Genesis', chapter: 16 },
          { day: 7, label: 'Gen 19-20; Psalm 1; Mark 7', book: 'Genesis', chapter: 19 },
          { day: 8, label: 'Gen 21-23; Psalm 107; Mark 8', book: 'Genesis', chapter: 21 },
          { day: 9, label: 'Gen 24-25; Psalm 4; Mark 9', book: 'Genesis', chapter: 24 },
          { day: 10, label: 'Gen 26-27; Mark 10', book: 'Genesis', chapter: 26 }
        ]
      },
      {
        week: 3,
        title: "Week 3",
        days: [
          { day: 11, label: 'Genesis 28-29; Mark 11', book: 'Genesis', chapter: 28 },
          { day: 12, label: 'Gen 30-31; Psalm 11; Mark 12', book: 'Genesis', chapter: 30 },
          { day: 13, label: 'Gen 32-34; Psalm 145; Mark 13', book: 'Genesis', chapter: 32 },
          { day: 14, label: 'Gen 35-37; Psalm 12; Mark 14', book: 'Genesis', chapter: 35 },
          { day: 15, label: 'Gen 38-40; Mark 15', book: 'Genesis', chapter: 38 }
        ]
      },
      {
        week: 4,
        title: "Week 4",
        days: [
          { day: 16, label: 'Genesis 41-42; Mark 16', book: 'Genesis', chapter: 41 },
          { day: 17, label: 'Gen 43-44; Psalm 24; Galatians 1', book: 'Genesis', chapter: 43 },
          { day: 18, label: 'Gen 45-46; Psalm 108; Gal 2', book: 'Genesis', chapter: 45 },
          { day: 19, label: 'Gen 47-48; Psalm 25; Gal 3', book: 'Genesis', chapter: 47 },
          { day: 20, label: 'Gen 49-50; Gal 4', book: 'Genesis', chapter: 49 }
        ]
      },
      {
        week: 5,
        title: "Week 5",
        days: [
          { day: 21, label: 'Exodus 1-3; Gal 5', book: 'Exodus', chapter: 1 },
          { day: 22, label: 'Ex 4-6; Gal 6', book: 'Exodus', chapter: 4 },
          { day: 23, label: 'Ex 7-9; Psalm 105; Ephesians 1', book: 'Exodus', chapter: 7 },
          { day: 24, label: 'Ex 10-12; Eph 2', book: 'Exodus', chapter: 10 },
          { day: 25, label: 'Ex 13-15; Psalm 114; Eph 3', book: 'Exodus', chapter: 13 }
        ]
      },
      {
        week: 6,
        title: "Week 6",
        days: [
          { day: 26, label: 'Exodus 16-18; Eph 4', book: 'Exodus', chapter: 16 },
          { day: 27, label: 'Ex 19-21; Psalm 33; Eph 5', book: 'Exodus', chapter: 19 },
          { day: 28, label: 'Ex 22-24; Psalm 109; Eph 6', book: 'Exodus', chapter: 22 },
          { day: 29, label: 'Ex 25-27; Psalm 90; Philippians 1', book: 'Exodus', chapter: 25 },
          { day: 30, label: 'Ex 28-31; Philippians 2', book: 'Exodus', chapter: 28 }
        ]
      },
      {
        week: 7,
        title: "Week 7",
        days: [
          { day: 31, label: 'Exodus 32-34; Philippians 3', book: 'Exodus', chapter: 32 },
          { day: 32, label: 'Exodus 35-37; Psalm 26; Phil 4', book: 'Exodus', chapter: 35 },
          { day: 33, label: 'Exodus 38-40; Hebrews 1', book: 'Exodus', chapter: 38 },
          { day: 34, label: 'Leviticus 1-3; Psalm 27; Heb 2', book: 'Leviticus', chapter: 1 },
          { day: 35, label: 'Lev 4-7; Heb 3', book: 'Leviticus', chapter: 4 }
        ]
      },
      {
        week: 8,
        title: "Week 8",
        days: [
          { day: 36, label: 'Leviticus 8-11; Ps 110; Hebrews 4', book: 'Leviticus', chapter: 8 },
          { day: 37, label: 'Lev 12-14; Psalm 111; Heb 5', book: 'Leviticus', chapter: 12 },
          { day: 38, label: 'Lev 15-18; Psalm 31; Heb 6', book: 'Leviticus', chapter: 15 },
          { day: 39, label: 'Lev 19-20; Heb 7', book: 'Leviticus', chapter: 19 },
          { day: 40, label: 'Lev 21-23; Heb 8', book: 'Leviticus', chapter: 21 }
        ]
      },
      {
        week: 9,
        title: "Week 9",
        days: [
          { day: 41, label: 'Lev 24-25; Psalm 81; Hebrews 9', book: 'Leviticus', chapter: 24 },
          { day: 42, label: 'Lev 26-27; Psalm 112; Heb 10', book: 'Leviticus', chapter: 26 },
          { day: 43, label: 'Numbers 1-2; Psalm 64; Heb 11', book: 'Numbers', chapter: 1 },
          { day: 44, label: 'Num 3-5; Heb 12', book: 'Numbers', chapter: 3 },
          { day: 45, label: 'Num 6-7; Heb 13', book: 'Numbers', chapter: 6 }
        ]
      },
      {
        week: 10,
        title: "Week 10",
        days: [
          { day: 46, label: 'Numbers 8-11; Colossians 1', book: 'Numbers', chapter: 8 },
          { day: 47, label: 'Num 12-14; Psalm 28; Col 2', book: 'Numbers', chapter: 12 },
          { day: 48, label: 'Num 15-18; Psalm 113; Col 3', book: 'Numbers', chapter: 15 },
          { day: 49, label: 'Num 19-21; Col 4', book: 'Numbers', chapter: 19 },
          { day: 50, label: 'Num 22-25; Luke 1', book: 'Numbers', chapter: 22 }
        ]
      },
      {
        week: 11,
        title: "Week 11",
        days: [
          { day: 51, label: 'Numbers 26-29; Luke 2', book: 'Numbers', chapter: 26 },
          { day: 52, label: 'Num 30-33; Psalm 35; Luke 3', book: 'Numbers', chapter: 30 },
          { day: 53, label: 'Num 34-36; Luke 4', book: 'Numbers', chapter: 34 },
          { day: 54, label: 'Deuteronomy 1-3; Ps 36; Luke 5', book: 'Deuteronomy', chapter: 1 },
          { day: 55, label: 'Deut 4-5; Luke 6', book: 'Deuteronomy', chapter: 4 }
        ]
      },
      {
        week: 12,
        title: "Week 12",
        days: [
          { day: 56, label: 'Deuteronomy 6-9; Luke 7', book: 'Deuteronomy', chapter: 6 },
          { day: 57, label: 'Deut 10-14; Psalm 5; Luke 8', book: 'Deuteronomy', chapter: 10 },
          { day: 58, label: 'Deut 15-18; Psalm 115; Luke 9', book: 'Deuteronomy', chapter: 15 },
          { day: 59, label: 'Deut 19-22; Psalm 6; Luke 10', book: 'Deuteronomy', chapter: 19 },
          { day: 60, label: 'Deut 23-26; Luke 11', book: 'Deuteronomy', chapter: 23 }
        ]
      },
      {
        week: 13,
        title: "Week 13",
        days: [
          { day: 61, label: 'Deut 27-31; Luke 12', book: 'Deuteronomy', chapter: 27 },
          { day: 62, label: 'Deut 32-34; Psalm 13; Luke 13', book: 'Deuteronomy', chapter: 32 },
          { day: 63, label: 'Joshua 1-4; Psalm 143; Luke 14', book: 'Joshua', chapter: 1 },
          { day: 64, label: 'Joshua 5-8; Psalm 14; Luke 15', book: 'Joshua', chapter: 5 },
          { day: 65, label: 'Joshua 9-13; Luke 16', book: 'Joshua', chapter: 9 }
        ]
      },
      {
        week: 14,
        title: "Week 14",
        days: [
          { day: 66, label: 'Joshua 14-17; Luke 17', book: 'Joshua', chapter: 14 },
          { day: 67, label: 'Josh 18-21; Psalm 15; Luke 18', book: 'Joshua', chapter: 18 },
          { day: 68, label: 'Josh 22-24; Psalm 116; Luke 19', book: 'Joshua', chapter: 22 },
          { day: 69, label: 'Judges 1-3; Psalm 16; Luke 20', book: 'Judges', chapter: 1 },
          { day: 70, label: 'Judges 4-6; Luke 21', book: 'Judges', chapter: 4 }
        ]
      },
      {
        week: 15,
        title: "Week 15",
        days: [
          { day: 71, label: 'Judges 7-8; Luke 22', book: 'Judges', chapter: 7 },
          { day: 72, label: 'Judges 9-11; Psalm 17; Luke 23', book: 'Judges', chapter: 9 },
          { day: 73, label: 'Judges 12-16; Psalm 146; Luke 24', book: 'Judges', chapter: 12 },
          { day: 74, label: 'Judges 17-18; Psalm 21; Acts 1', book: 'Judges', chapter: 17 },
          { day: 75, label: 'Judges 19-21; Acts 2', book: 'Judges', chapter: 19 }
        ]
      },
      {
        week: 16,
        title: "Week 16",
        days: [
          { day: 76, label: 'Ruth 1-2; Acts 3', book: 'Ruth', chapter: 1 },
          { day: 77, label: 'Ruth 3-4; Psalm 37; Acts 4', book: 'Ruth', chapter: 3 },
          { day: 78, label: '1 Samuel 1-2; Psalm 120; Acts 5', book: 'I Samuel', chapter: 1 },
          { day: 79, label: '1 Sam 3-5; Psalm 23; Acts 6', book: 'I Samuel', chapter: 3 },
          { day: 80, label: '1 Sam 6-8; Acts 7', book: 'I Samuel', chapter: 6 }
        ]
      },
      {
        week: 17,
        title: "Week 17",
        days: [
          { day: 81, label: '1 Samuel 9-10; Acts 8', book: 'I Samuel', chapter: 9 },
          { day: 82, label: '1 Sam 11-13; Psalm 38; Acts 9', book: 'I Samuel', chapter: 11 },
          { day: 83, label: '1 Sam 14; Psalm 124; Acts 10', book: 'I Samuel', chapter: 14 },
          { day: 84, label: '1 Sam 15-16; 1 Chr 1; Ps 39; Acts 11', book: 'I Samuel', chapter: 15 },
          { day: 85, label: '1 Sam 17; 1 Chr 2; Acts 12', book: 'I Samuel', chapter: 17 }
        ]
      },
      {
        week: 18,
        title: "Week 18",
        days: [
          { day: 86, label: '1 Sam 18-19; 1 Chr 3; Ps 59; Acts 13', book: 'I Samuel', chapter: 18 },
          { day: 87, label: '1 Sa 20; 1 Chr 4; Ps 56, 57, 142; Acts 14', book: 'I Samuel', chapter: 20 },
          { day: 88, label: '1 Sam 21-22; 1 Chr 5; Ps 52; Acts 15', book: 'I Samuel', chapter: 21 },
          { day: 89, label: '1 Sam 23-24; 1 Chr 6; Ps 54; Acts 16', book: 'I Samuel', chapter: 23 },
          { day: 90, label: '1 Sam 25; 1 Chr 7; Acts 17', book: 'I Samuel', chapter: 25 }
        ]
      },
      {
        week: 19,
        title: "Week 19",
        days: [
          { day: 91, label: '1 Sam 26-27; 1 Chr 8; Acts 18', book: 'I Samuel', chapter: 26 },
          { day: 92, label: '1 Sam 28-29; 1 Chr 9; Acts 19', book: 'I Samuel', chapter: 28 },
          { day: 93, label: '1 Sam 30-31; 1 Chr 10; Acts 20', book: 'I Samuel', chapter: 30 },
          { day: 94, label: '2 Sam 1-2; 1 Chr 11; Ps 96, 106; Acts 21', book: 'II Samuel', chapter: 1 },
          { day: 95, label: '2 Sam 3-5; 1 Chr 12; Ps 122; Acts 22', book: 'II Samuel', chapter: 3 }
        ]
      },
      {
        week: 20,
        title: "Week 20",
        days: [
          { day: 96, label: '2 Sam 6; 1 Chr 13; Ps 60; Acts 23', book: 'II Samuel', chapter: 6 },
          { day: 97, label: '1 Chron 14-16; Acts 24', book: 'I Chronicles', chapter: 14 },
          { day: 98, label: '2 Sam 7-8; 1 Chr 17; Ps 132; Acts 25', book: 'II Samuel', chapter: 7 },
          { day: 99, label: '2 Sam 9-10, 1 Chr 18-19; Ps 89; Acts 26', book: 'II Samuel', chapter: 9 },
          { day: 100, label: '2 Sam 11-12; 1 Chr 20; Ps 51, 32; Acts 27', book: 'II Samuel', chapter: 11 }
        ]
      },
      {
        week: 21,
        title: "Week 21",
        days: [
          { day: 101, label: '2 Samuel 13-14; Acts 28', book: 'II Samuel', chapter: 13 },
          { day: 102, label: '2 Sam 15-17; Psalms 3, 63; Romans 1', book: 'II Samuel', chapter: 15 },
          { day: 103, label: '2 Sam 18-20; Psalm 34; Romans 2', book: 'II Samuel', chapter: 18 },
          { day: 104, label: '2 Sam 21-23; Psalm 18; Romans 3', book: 'II Samuel', chapter: 21 },
          { day: 105, label: '2 Sam 24; 1 Chr 21; Romans 4', book: 'II Samuel', chapter: 24 }
        ]
      },
      {
        week: 22,
        title: "Week 22",
        days: [
          { day: 106, label: '1 Chron 22-25; Psalm 78; Rom 5', book: 'I Chronicles', chapter: 22 },
          { day: 107, label: '1 Kings 1; 1 Chr 26-28; Rom 6', book: 'I Kings', chapter: 1 },
          { day: 108, label: '1 Kings 2; 1 Chr 29; Rom 7', book: 'I Kings', chapter: 2 },
          { day: 109, label: '1 Kings 3; 2 Chr 1; Ps 42; Rom 8', book: 'I Kings', chapter: 3 },
          { day: 110, label: '1 Kings 4; Prov 1-2; Ps 43; Rom 9', book: 'I Kings', chapter: 4 }
        ]
      },
      {
        week: 23,
        title: "Week 23",
        days: [
          { day: 111, label: 'Proverbs 3-5; Romans 10', book: 'Proverbs', chapter: 3 },
          { day: 112, label: 'Proverbs 6-7; Psalm 7; Rom 11', book: 'Proverbs', chapter: 6 },
          { day: 113, label: 'Proverbs 8-10; Psalm 144; Rom 12', book: 'Proverbs', chapter: 8 },
          { day: 114, label: 'Proverbs 11-13; Psalm 8; Rom 13', book: 'Proverbs', chapter: 11 },
          { day: 115, label: 'Proverbs 14-15; Rom 14', book: 'Proverbs', chapter: 14 }
        ]
      },
      {
        week: 24,
        title: "Week 24",
        days: [
          { day: 116, label: 'Proverbs 16-18; Romans 15', book: 'Proverbs', chapter: 16 },
          { day: 117, label: 'Proverbs 19-21; Ps 40; Rom 16', book: 'Proverbs', chapter: 19 },
          { day: 118, label: 'Proverbs 22-23; Ps 117; 1 Thess 1', book: 'Proverbs', chapter: 22 },
          { day: 119, label: 'Proverbs 24-25; Ps 41; 1 Thess 2', book: 'Proverbs', chapter: 24 },
          { day: 120, label: 'Proverbs 26-28; 1 Thess 3', book: 'Proverbs', chapter: 26 }
        ]
      },
      {
        week: 25,
        title: "Week 25",
        days: [
          { day: 121, label: 'Proverbs 29-31; 1 Thess 4', book: 'Proverbs', chapter: 29 },
          { day: 122, label: 'Song of Sol 1-3; Ps 72; 1 Thess 5', book: 'Song of Solomon', chapter: 1 },
          { day: 123, label: 'Song of Sol 4-6; 2 Thess 1', book: 'Song of Solomon', chapter: 4 },
          { day: 124, label: 'Song of Sol 7-8; Ps 127; 2 Thess 2', book: 'Song of Solomon', chapter: 7 },
          { day: 125, label: '1 Kings 5; 2 Chr 2; 2 Thess 3', book: 'I Kings', chapter: 5 }
        ]
      },
      {
        week: 26,
        title: "Week 26",
        days: [
          { day: 126, label: '1 Kings 6; 2 Chron 3; 1 Timothy 1', book: 'I Kings', chapter: 6 },
          { day: 127, label: '1 Kings 7; 2 Chr 4; Ps 44; 1 Tim 2', book: 'I Kings', chapter: 7 },
          { day: 128, label: '1 Kings 8; Psalm 30; 1 Tim 3', book: 'I Kings', chapter: 8 },
          { day: 129, label: '2 Chr 5-7; Psalm 121; 1 Tim 4', book: 'II Chronicles', chapter: 5 },
          { day: 130, label: '1 Kings 9; 2 Chr 8; 1 Tim 5', book: 'I Kings', chapter: 9 }
        ]
      },
      {
        week: 27,
        title: "Week 27",
        days: [
          { day: 131, label: '1 Kings 10-11; 2 Chr 9; 1 Tim 6', book: 'I Kings', chapter: 10 },
          { day: 132, label: 'Ecclesiastes 1-3; Ps 45; 2 Tim 1', book: 'Ecclesiastes', chapter: 1 },
          { day: 133, label: 'Eccl 4-6; Ps 125; 2 Tim 2', book: 'Ecclesiastes', chapter: 4 },
          { day: 134, label: 'Eccl 7-9; Ps 46; 2 Tim 3', book: 'Ecclesiastes', chapter: 7 },
          { day: 135, label: 'Eccl 10-12; 2 Tim 4', book: 'Ecclesiastes', chapter: 10 }
        ]
      },
      {
        week: 28,
        title: "Week 28",
        days: [
          { day: 136, label: '1 Kings 12; 2 Chr 10-11; Titus 1', book: 'I Kings', chapter: 12 },
          { day: 137, label: '1 Kin 13-14; 2 Chr 12; Ps 47; Titus 2', book: 'I Kings', chapter: 13 },
          { day: 138, label: '1 Kin 15; 2 Chr 13-14; Titus 3', book: 'I Kings', chapter: 15 },
          { day: 139, label: '2 Chr 15-16; 1 Kin 16; Philemon', book: 'II Chronicles', chapter: 15 },
          { day: 140, label: '1 Kin 17-18; Ps 119; Jude', book: 'I Kings', chapter: 17 }
        ]
      },
      {
        week: 29,
        title: "Week 29",
        days: [
          { day: 141, label: '1 Kin 19-21; 2 Chr 17; Ps 129; Matt 1', book: 'I Kings', chapter: 19 },
          { day: 142, label: '1 Kings 22; 2 Chr 18; Matt 2', book: 'I Kings', chapter: 22 },
          { day: 143, label: '2 Chr 19-20; 2 Kin 1; Ps 20; Matt 3', book: 'II Chronicles', chapter: 19 },
          { day: 144, label: '2 Kings 2-3; Ps 48; Matt 4', book: 'II Kings', chapter: 2 },
          { day: 145, label: '2 Kings 4-6; Matt 5', book: 'II Kings', chapter: 4 }
        ]
      },
      {
        week: 30,
        title: "Week 30",
        days: [
          { day: 146, label: '2 Kings 7-8; 2 Chr 21; Matt 6', book: 'II Kings', chapter: 7 },
          { day: 147, label: '2 Kings 9-10; Psalm 49; Matt 7', book: 'II Kings', chapter: 9 },
          { day: 148, label: '2 Chr 22-23; 2 Kin 11; Ps 131; Matt 8', book: 'II Chronicles', chapter: 22 },
          { day: 149, label: '2 Chr 24; 2 Kin 12; Ps 50; Matt 9', book: 'II Chronicles', chapter: 24 },
          { day: 150, label: 'Joel 1-3; Matt 10', book: 'Joel', chapter: 1 }
        ]
      },
      {
        week: 31,
        title: "Week 31",
        days: [
          { day: 151, label: 'Jonah 1-4; Matthew 11', book: 'Jonah', chapter: 1 },
          { day: 152, label: '2 Kings 13-14; 2 Chr 25; Ps 53; Matt 12', book: 'II Kings', chapter: 13 },
          { day: 153, label: 'Amos 1-3; Matt 13', book: 'Amos', chapter: 1 },
          { day: 154, label: 'Amos 4-6; Psalm 55; Matt 14', book: 'Amos', chapter: 4 },
          { day: 155, label: 'Amos 7-9; Matt 15', book: 'Amos', chapter: 7 }
        ]
      },
      {
        week: 32,
        title: "Week 32",
        days: [
          { day: 156, label: 'Hosea 1-3; Matthew 16', book: 'Hosea', chapter: 1 },
          { day: 157, label: 'Hosea 4-6; Psalm 58; Matt 17', book: 'Hosea', chapter: 4 },
          { day: 158, label: 'Hosea 7-10; Matt 18', book: 'Hosea', chapter: 7 },
          { day: 159, label: 'Hosea 11-13; Matt 19', book: 'Hosea', chapter: 11 },
          { day: 160, label: 'Hosea 14; 2 Chr 26-27; Ps 61; Matt 20', book: 'Hosea', chapter: 14 }
        ]
      },
      {
        week: 33,
        title: "Week 33",
        days: [
          { day: 161, label: '2 Kings 15-16; Matthew 21', book: 'II Kings', chapter: 15 },
          { day: 162, label: 'Isaiah 1-3; Psalm 9; Matthew 22', book: 'Isaiah', chapter: 1 },
          { day: 163, label: 'Isaiah 4-6; Matthew 23', book: 'Isaiah', chapter: 4 },
          { day: 164, label: 'Micah 1-4; Psalm 10; Matthew 24', book: 'Micah', chapter: 1 },
          { day: 165, label: 'Micah 5-7; Matthew 25', book: 'Micah', chapter: 5 }
        ]
      },
      {
        week: 34,
        title: "Week 34",
        days: [
          { day: 166, label: 'Isaiah 7-10; Psalm 22; Matt 26', book: 'Isaiah', chapter: 7 },
          { day: 167, label: 'Isa 11-13; Ps 118; Matt 27', book: 'Isaiah', chapter: 11 },
          { day: 168, label: 'Isa 14-16; Matt 28', book: 'Isaiah', chapter: 14 },
          { day: 169, label: 'Isaiah 17-19; Ps 62; 1 Corinthians 1', book: 'Isaiah', chapter: 17 },
          { day: 170, label: 'Isa 20-22; 1 Corinthians 2', book: 'Isaiah', chapter: 20 }
        ]
      },
      {
        week: 35,
        title: "Week 35",
        days: [
          { day: 171, label: 'Isaiah 23-25; 1 Corinthians 3', book: 'Isaiah', chapter: 23 },
          { day: 172, label: 'Isa 26-29; Psalm 65; 1 Cor 4', book: 'Isaiah', chapter: 26 },
          { day: 173, label: 'Isa 30-32; 1 Cor 5', book: 'Isaiah', chapter: 30 },
          { day: 174, label: 'Isa 33-35; 1 Cor 6', book: 'Isaiah', chapter: 33 },
          { day: 175, label: '2 Chr 28; 2 Kings 17; Ps 66; 1 Cor 7', book: 'II Chronicles', chapter: 28 }
        ]
      },
      {
        week: 36,
        title: "Week 36",
        days: [
          { day: 176, label: '2 Chr 29-31; 1 Corinthians 8', book: 'II Chronicles', chapter: 29 },
          { day: 177, label: '2 Kings 18-19; 2 Chr 32; Ps 67; 1 Cor 9', book: 'II Kings', chapter: 18 },
          { day: 178, label: 'Isaiah 36-37; Ps 123; 1 Cor 10', book: 'Isaiah', chapter: 36 },
          { day: 179, label: '2 Kings 20; Isa 38-40; Ps 68; 1 Cor 11', book: 'II Kings', chapter: 20 },
          { day: 180, label: 'Isa 41-44; 1 Cor 12', book: 'Isaiah', chapter: 41 }
        ]
      },
      {
        week: 37,
        title: "Week 37",
        days: [
          { day: 181, label: 'Isaiah 45-48; 1 Corinthians 13', book: 'Isaiah', chapter: 45 },
          { day: 182, label: 'Isa 49-52; Psalm 69; 1 Cor 14', book: 'Isaiah', chapter: 49 },
          { day: 183, label: 'Isa 53-55; Psalm 128; 1 Cor 15', book: 'Isaiah', chapter: 53 },
          { day: 184, label: 'Isa 56-59; Psalm 70; 1 Cor 16', book: 'Isaiah', chapter: 56 },
          { day: 185, label: 'Isa 60-63; 2 Cor 1', book: 'Isaiah', chapter: 60 }
        ]
      },
      {
        week: 38,
        title: "Week 38",
        days: [
          { day: 186, label: 'Isaiah 64-66; 2 Corinthians 2', book: 'Isaiah', chapter: 64 },
          { day: 187, label: '2 Kings 21; 2 Chr 33; Ps 71; 2 Cor 3', book: 'II Kings', chapter: 21 },
          { day: 188, label: 'Nahum 1-3; Psalm 149; 2 Cor 4', book: 'Nahum', chapter: 1 },
          { day: 189, label: '2 Kings 22-23; Psalm 73; 2 Cor 5', book: 'II Kings', chapter: 22 },
          { day: 190, label: '2 Chr 34-35; 2 Cor 6', book: 'II Chronicles', chapter: 34 }
        ]
      },
      {
        week: 39,
        title: "Week 39",
        days: [
          { day: 191, label: 'Habakkuk 1-3; 2 Corinthians 7', book: 'Habakkuk', chapter: 1 },
          { day: 192, label: 'Zephaniah 1-3; Psalm 74; 2 Cor 8', book: 'Zephaniah', chapter: 1 },
          { day: 193, label: 'Jeremiah 1-4; Psalm 130; 2 Cor 9', book: 'Jeremiah', chapter: 1 },
          { day: 194, label: 'Jer 5-7; Psalm 75; 2 Cor 10', book: 'Jeremiah', chapter: 5 },
          { day: 195, label: 'Jer 8-10; 2 Cor 11', book: 'Jeremiah', chapter: 8 }
        ]
      },
      {
        week: 40,
        title: "Week 40",
        days: [
          { day: 196, label: 'Jeremiah 11-13; 2 Corinthians 12', book: 'Jeremiah', chapter: 11 },
          { day: 197, label: 'Jer 14-16; Psalm 76; 2 Cor 13', book: 'Jeremiah', chapter: 14 },
          { day: 198, label: 'Jer 17-20; James 1', book: 'Jeremiah', chapter: 17 },
          { day: 199, label: 'Jer 22, 23, 26; Psalm 77; James 2', book: 'Jeremiah', chapter: 22 },
          { day: 200, label: 'Jer 25, 35, 36, 45; Ps 133; James 3', book: 'Jeremiah', chapter: 25 }
        ]
      },
      {
        week: 41,
        title: "Week 41",
        days: [
          { day: 201, label: 'Jeremiah 27, 28, 29, 24; James 4', book: 'Jeremiah', chapter: 27 },
          { day: 202, label: 'Jer 37, 21, 34; Psalm 79; James 5', book: 'Jeremiah', chapter: 37 },
          { day: 203, label: 'Jer 30-33; 1 Peter 1', book: 'Jeremiah', chapter: 30 },
          { day: 204, label: 'Jer 38, 39, 52; 1 Pet 2', book: 'Jeremiah', chapter: 38 },
          { day: 205, label: 'Ezra 1-2; John 21', book: 'Ezra', chapter: 1 }
        ]
      },
      {
        week: 42,
        title: "Week 42",
        days: [
          { day: 206, label: 'Lamentations 1-5; Ps 137; 1 Pet 4', book: 'Lamentations', chapter: 1 },
          { day: 207, label: 'Obadiah; Jer 40-42; Ps 147; 1 Pet 5', book: 'Obadiah', chapter: 1 },
          { day: 208, label: 'Jeremiah 43, 44, 46; 2 Peter 1', book: 'Jeremiah', chapter: 43 },
          { day: 209, label: 'Jer 47, 48, 49; Ps 80; 2 Peter 2', book: 'Jeremiah', chapter: 47 },
          { day: 210, label: 'Jer 50-51; 2 Peter 3', book: 'Jeremiah', chapter: 50 }
        ]
      },
      {
        week: 43,
        title: "Week 43",
        days: [
          { day: 211, label: 'Ezekiel 1-3; John 1', book: 'Ezekiel', chapter: 1 },
          { day: 212, label: 'Ezekiel 4-6; Psalm 82; John 2', book: 'Ezekiel', chapter: 4 },
          { day: 213, label: 'Ezekiel 7-9; John 3', book: 'Ezekiel', chapter: 7 },
          { day: 214, label: 'Ezekiel 10-12; Psalm 83; John 4', book: 'Ezekiel', chapter: 10 },
          { day: 215, label: 'Ezekiel 13-15; Psalm 136; John 5', book: 'Ezekiel', chapter: 13 }
        ]
      },
      {
        week: 44,
        title: "Week 44",
        days: [
          { day: 216, label: 'Ezekiel 16-18; John 6', book: 'Ezekiel', chapter: 16 },
          { day: 217, label: 'Ezekiel 19-21; Psalm 84; John 7', book: 'Ezekiel', chapter: 19 },
          { day: 218, label: 'Ezekiel 22-24; Psalm 134; John 8', book: 'Ezekiel', chapter: 22 },
          { day: 219, label: 'Ezekiel 25-27; Psalm 85; John 9', book: 'Ezekiel', chapter: 25 },
          { day: 220, label: 'Ezekiel 28-30; John 10', book: 'Ezekiel', chapter: 28 }
        ]
      },
      {
        week: 45,
        title: "Week 45",
        days: [
          { day: 221, label: 'Ezekiel 31-33; John 11', book: 'Ezekiel', chapter: 31 },
          { day: 222, label: 'Ezekiel 34-36; Psalm 86; John 12', book: 'Ezekiel', chapter: 34 },
          { day: 223, label: 'Ezekiel 37-39; Psalm 87; John 13', book: 'Ezekiel', chapter: 37 },
          { day: 224, label: 'Ezekiel 40-42; John 14', book: 'Ezekiel', chapter: 40 },
          { day: 225, label: 'Ezekiel 43-45; Psalm 135; John 15', book: 'Ezekiel', chapter: 43 }
        ]
      },
      {
        week: 46,
        title: "Week 46",
        days: [
          { day: 226, label: 'Ezekiel 46-48; John 16', book: 'Ezekiel', chapter: 46 },
          { day: 227, label: 'Daniel 1-3; Psalm 88; John 17', book: 'Daniel', chapter: 1 },
          { day: 228, label: 'Daniel 4-6; John 18', book: 'Daniel', chapter: 4 },
          { day: 229, label: 'Daniel 7-9; Psalm 91; John 19', book: 'Daniel', chapter: 7 },
          { day: 230, label: 'Daniel 10-12; John 20', book: 'Daniel', chapter: 10 }
        ]
      },
      {
        week: 47,
        title: "Week 47",
        days: [
          { day: 231, label: 'Zechariah 6-8; 1 John 4', book: 'Zechariah', chapter: 6 },
          { day: 232, label: 'Zechariah 9-11; 1 John 5', book: 'Zechariah', chapter: 9 },
          { day: 233, label: 'Zechariah 12-14; Psalm 94; 2 John', book: 'Zechariah', chapter: 12 },
          { day: 234, label: 'Ezra 5-6; Psalm 95; 3 John', book: 'Ezra', chapter: 5 },
          { day: 235, label: 'Esther 1-3; Psalm 139; Revelation 1', book: 'Esther', chapter: 1 }
        ]
      },
      {
        week: 48,
        title: "Week 48",
        days: [
          { day: 236, label: 'Esther 4-6; Revelation 2', book: 'Esther', chapter: 4 },
          { day: 237, label: 'Esther 7-10; Revelation 3', book: 'Esther', chapter: 7 },
          { day: 238, label: 'Ezra 7-10; Psalm 97; Revelation 4', book: 'Ezra', chapter: 7 },
          { day: 239, label: 'Nehemiah 1-3; Revelation 5', book: 'Nehemiah', chapter: 1 },
          { day: 240, label: 'Neh 4-6; Psalm 98; Revelation 6', book: 'Nehemiah', chapter: 4 }
        ]
      },
      {
        week: 49,
        title: "Week 49",
        days: [
          { day: 241, label: 'Neh 7-9; Psalm 140; Revelation 7', book: 'Nehemiah', chapter: 7 },
          { day: 242, label: 'Neh 10-13; Revelation 8', book: 'Nehemiah', chapter: 10 },
          { day: 243, label: 'Malachi; Psalm 2; Revelation 9', book: 'Malachi', chapter: 1 },
          { day: 244, label: 'Job 1-3; Psalm 29; Revelation 10', book: 'Job', chapter: 1 },
          { day: 245, label: 'Job 4-7; Psalm 99; Revelation 11', book: 'Job', chapter: 4 }
        ]
      },
      {
        week: 50,
        title: "Week 50",
        days: [
          { day: 246, label: 'Job 8-11; Revelation 12', book: 'Job', chapter: 8 },
          { day: 247, label: 'Job 12-14; Psalm 100; Revelation 13', book: 'Job', chapter: 12 },
          { day: 248, label: 'Job 15-17; Revelation 14', book: 'Job', chapter: 15 },
          { day: 249, label: 'Job 18-20; Psalm 141; Revelation 15', book: 'Job', chapter: 18 },
          { day: 250, label: 'Job 21-23; Psalm 101; Revelation 16', book: 'Job', chapter: 21 }
        ]
      },
      {
        week: 51,
        title: "Week 51",
        days: [
          { day: 251, label: 'Job 24-27; Revelation 17', book: 'Job', chapter: 24 },
          { day: 252, label: 'Job 28-30; Revelation 18', book: 'Job', chapter: 28 },
          { day: 253, label: 'Ezra 3-4; Psalm 92; 1 John 1', book: 'Ezra', chapter: 3 },
          { day: 254, label: 'Job 31-33; Psalm 102; Revelation 19', book: 'Job', chapter: 31 },
          { day: 255, label: 'Haggai; Zechariah 1; Ps 138; 1 John 2', book: 'Haggai', chapter: 1 }
        ]
      },
      {
        week: 52,
        title: "Week 52",
        days: [
          { day: 256, label: 'Job 34-36; Revelation 20', book: 'Job', chapter: 34 },
          { day: 257, label: 'Zechariah 2-5; Psalm 93; 1 John 3', book: 'Zechariah', chapter: 2 },
          { day: 258, label: 'Job 37-39; Psalm 103; Revelation 21', book: 'Job', chapter: 37 },
          { day: 259, label: '2 Kin 24-25; 2 Chr 36; Ps 126; 1 Pet 3', book: 'II Kings', chapter: 24 },
          { day: 260, label: 'Job 40-42; Psalm 150; Revelation 22', book: 'Job', chapter: 40 }
        ]
      }
    ]
  },
  year365: {
    title: "365-Day Canonical",
    description: "Read straight through the Bible from Genesis to Revelation in 365 days.",
    weeks: [
      {
        week: 1,
        title: "Week 1",
        days: [
          { day: 1, label: 'Genesis 1-3', book: 'Genesis', chapter: 1 },
          { day: 2, label: 'Genesis 4-6', book: 'Genesis', chapter: 4 },
          { day: 3, label: 'Genesis 7-9', book: 'Genesis', chapter: 7 },
          { day: 4, label: 'Genesis 10-12', book: 'Genesis', chapter: 10 },
          { day: 5, label: 'Genesis 13-15', book: 'Genesis', chapter: 13 },
          { day: 6, label: 'Genesis 16-18', book: 'Genesis', chapter: 16 },
          { day: 7, label: 'Genesis 19-22', book: 'Genesis', chapter: 19 }
        ]
      },
      {
        week: 2,
        title: "Week 2",
        days: [
          { day: 8, label: 'Genesis 23-25', book: 'Genesis', chapter: 23 },
          { day: 9, label: 'Genesis 26-28', book: 'Genesis', chapter: 26 },
          { day: 10, label: 'Genesis 29-31', book: 'Genesis', chapter: 29 },
          { day: 11, label: 'Genesis 32-34', book: 'Genesis', chapter: 32 },
          { day: 12, label: 'Genesis 35-37', book: 'Genesis', chapter: 35 },
          { day: 13, label: 'Genesis 38-40', book: 'Genesis', chapter: 38 },
          { day: 14, label: 'Genesis 41-43', book: 'Genesis', chapter: 41 }
        ]
      },
      {
        week: 3,
        title: "Week 3",
        days: [
          { day: 15, label: 'Genesis 44-46', book: 'Genesis', chapter: 44 },
          { day: 16, label: 'Genesis 47-50', book: 'Genesis', chapter: 47 },
          { day: 17, label: 'Exodus 1-3', book: 'Exodus', chapter: 1 },
          { day: 18, label: 'Exodus 4-6', book: 'Exodus', chapter: 4 },
          { day: 19, label: 'Exodus 7-9', book: 'Exodus', chapter: 7 },
          { day: 20, label: 'Exodus 10-12', book: 'Exodus', chapter: 10 },
          { day: 21, label: 'Exodus 13-15', book: 'Exodus', chapter: 13 }
        ]
      },
      {
        week: 4,
        title: "Week 4",
        days: [
          { day: 22, label: 'Exodus 16-18', book: 'Exodus', chapter: 16 },
          { day: 23, label: 'Exodus 19-21', book: 'Exodus', chapter: 19 },
          { day: 24, label: 'Exodus 22-24', book: 'Exodus', chapter: 22 },
          { day: 25, label: 'Exodus 25-27', book: 'Exodus', chapter: 25 },
          { day: 26, label: 'Exodus 28-30', book: 'Exodus', chapter: 28 },
          { day: 27, label: 'Exodus 31-33', book: 'Exodus', chapter: 31 },
          { day: 28, label: 'Exodus 34-36', book: 'Exodus', chapter: 34 }
        ]
      },
      {
        week: 5,
        title: "Week 5",
        days: [
          { day: 29, label: 'Exodus 37-40', book: 'Exodus', chapter: 37 },
          { day: 30, label: 'Leviticus 1-3', book: 'Leviticus', chapter: 1 },
          { day: 31, label: 'Leviticus 4-6', book: 'Leviticus', chapter: 4 },
          { day: 32, label: 'Leviticus 7-9', book: 'Leviticus', chapter: 7 },
          { day: 33, label: 'Leviticus 10-12', book: 'Leviticus', chapter: 10 },
          { day: 34, label: 'Leviticus 13-15', book: 'Leviticus', chapter: 13 },
          { day: 35, label: 'Leviticus 16-18', book: 'Leviticus', chapter: 16 }
        ]
      },
      {
        week: 6,
        title: "Week 6",
        days: [
          { day: 36, label: 'Leviticus 19-21', book: 'Leviticus', chapter: 19 },
          { day: 37, label: 'Leviticus 22-24', book: 'Leviticus', chapter: 22 },
          { day: 38, label: 'Leviticus 25-27', book: 'Leviticus', chapter: 25 },
          { day: 39, label: 'Numbers 1-3', book: 'Numbers', chapter: 1 },
          { day: 40, label: 'Numbers 4-6', book: 'Numbers', chapter: 4 },
          { day: 41, label: 'Numbers 7-9', book: 'Numbers', chapter: 7 },
          { day: 42, label: 'Numbers 10-12', book: 'Numbers', chapter: 10 }
        ]
      },
      {
        week: 7,
        title: "Week 7",
        days: [
          { day: 43, label: 'Numbers 13-15', book: 'Numbers', chapter: 13 },
          { day: 44, label: 'Numbers 16-18', book: 'Numbers', chapter: 16 },
          { day: 45, label: 'Numbers 19-21', book: 'Numbers', chapter: 19 },
          { day: 46, label: 'Numbers 22-24', book: 'Numbers', chapter: 22 },
          { day: 47, label: 'Numbers 25-27', book: 'Numbers', chapter: 25 },
          { day: 48, label: 'Numbers 28-30', book: 'Numbers', chapter: 28 },
          { day: 49, label: 'Numbers 31-33', book: 'Numbers', chapter: 31 }
        ]
      },
      {
        week: 8,
        title: "Week 8",
        days: [
          { day: 50, label: 'Numbers 34-36', book: 'Numbers', chapter: 34 },
          { day: 51, label: 'Deuteronomy 1-3', book: 'Deuteronomy', chapter: 1 },
          { day: 52, label: 'Deuteronomy 4-6', book: 'Deuteronomy', chapter: 4 },
          { day: 53, label: 'Deuteronomy 7-9', book: 'Deuteronomy', chapter: 7 },
          { day: 54, label: 'Deuteronomy 10-12', book: 'Deuteronomy', chapter: 10 },
          { day: 55, label: 'Deuteronomy 13-15', book: 'Deuteronomy', chapter: 13 },
          { day: 56, label: 'Deuteronomy 16-18', book: 'Deuteronomy', chapter: 16 }
        ]
      },
      {
        week: 9,
        title: "Week 9",
        days: [
          { day: 57, label: 'Deuteronomy 19-21', book: 'Deuteronomy', chapter: 19 },
          { day: 58, label: 'Deuteronomy 22-24', book: 'Deuteronomy', chapter: 22 },
          { day: 59, label: 'Deuteronomy 25-27', book: 'Deuteronomy', chapter: 25 },
          { day: 60, label: 'Deuteronomy 28-30', book: 'Deuteronomy', chapter: 28 },
          { day: 61, label: 'Deuteronomy 31-34', book: 'Deuteronomy', chapter: 31 },
          { day: 62, label: 'Joshua 1-3', book: 'Joshua', chapter: 1 },
          { day: 63, label: 'Joshua 4-6', book: 'Joshua', chapter: 4 }
        ]
      },
      {
        week: 10,
        title: "Week 10",
        days: [
          { day: 64, label: 'Joshua 7-9', book: 'Joshua', chapter: 7 },
          { day: 65, label: 'Joshua 10-12', book: 'Joshua', chapter: 10 },
          { day: 66, label: 'Joshua 13-15', book: 'Joshua', chapter: 13 },
          { day: 67, label: 'Joshua 16-18', book: 'Joshua', chapter: 16 },
          { day: 68, label: 'Joshua 19-21', book: 'Joshua', chapter: 19 },
          { day: 69, label: 'Joshua 22-24', book: 'Joshua', chapter: 22 },
          { day: 70, label: 'Judges 1-3', book: 'Judges', chapter: 1 }
        ]
      },
      {
        week: 11,
        title: "Week 11",
        days: [
          { day: 71, label: 'Judges 4-6', book: 'Judges', chapter: 4 },
          { day: 72, label: 'Judges 7-9', book: 'Judges', chapter: 7 },
          { day: 73, label: 'Judges 10-12', book: 'Judges', chapter: 10 },
          { day: 74, label: 'Judges 13-15', book: 'Judges', chapter: 13 },
          { day: 75, label: 'Judges 16-18', book: 'Judges', chapter: 16 },
          { day: 76, label: 'Judges 19-21', book: 'Judges', chapter: 19 },
          { day: 77, label: 'Ruth 1-4', book: 'Ruth', chapter: 1 }
        ]
      },
      {
        week: 12,
        title: "Week 12",
        days: [
          { day: 78, label: '1 Samuel 1-3', book: '1 Samuel', chapter: 1 },
          { day: 79, label: '1 Samuel 4-6', book: '1 Samuel', chapter: 4 },
          { day: 80, label: '1 Samuel 7-9', book: '1 Samuel', chapter: 7 },
          { day: 81, label: '1 Samuel 10-12', book: '1 Samuel', chapter: 10 },
          { day: 82, label: '1 Samuel 13-15', book: '1 Samuel', chapter: 13 },
          { day: 83, label: '1 Samuel 16-18', book: '1 Samuel', chapter: 16 },
          { day: 84, label: '1 Samuel 19-21', book: '1 Samuel', chapter: 19 }
        ]
      },
      {
        week: 13,
        title: "Week 13",
        days: [
          { day: 85, label: '1 Samuel 22-24', book: '1 Samuel', chapter: 22 },
          { day: 86, label: '1 Samuel 25-27', book: '1 Samuel', chapter: 25 },
          { day: 87, label: '1 Samuel 28-31', book: '1 Samuel', chapter: 28 },
          { day: 88, label: '2 Samuel 1-3', book: '2 Samuel', chapter: 1 },
          { day: 89, label: '2 Samuel 4-6', book: '2 Samuel', chapter: 4 },
          { day: 90, label: '2 Samuel 7-9', book: '2 Samuel', chapter: 7 },
          { day: 91, label: '2 Samuel 10-12', book: '2 Samuel', chapter: 10 }
        ]
      },
      {
        week: 14,
        title: "Week 14",
        days: [
          { day: 92, label: '2 Samuel 13-15', book: '2 Samuel', chapter: 13 },
          { day: 93, label: '2 Samuel 16-18', book: '2 Samuel', chapter: 16 },
          { day: 94, label: '2 Samuel 19-21', book: '2 Samuel', chapter: 19 },
          { day: 95, label: '2 Samuel 22-24', book: '2 Samuel', chapter: 22 },
          { day: 96, label: '1 Kings 1-3', book: '1 Kings', chapter: 1 },
          { day: 97, label: '1 Kings 4-6', book: '1 Kings', chapter: 4 },
          { day: 98, label: '1 Kings 7-9', book: '1 Kings', chapter: 7 }
        ]
      },
      {
        week: 15,
        title: "Week 15",
        days: [
          { day: 99, label: '1 Kings 10-12', book: '1 Kings', chapter: 10 },
          { day: 100, label: '1 Kings 13-15', book: '1 Kings', chapter: 13 },
          { day: 101, label: '1 Kings 16-18', book: '1 Kings', chapter: 16 },
          { day: 102, label: '1 Kings 19-22', book: '1 Kings', chapter: 19 },
          { day: 103, label: '2 Kings 1-3', book: '2 Kings', chapter: 1 },
          { day: 104, label: '2 Kings 4-6', book: '2 Kings', chapter: 4 },
          { day: 105, label: '2 Kings 7-9', book: '2 Kings', chapter: 7 }
        ]
      },
      {
        week: 16,
        title: "Week 16",
        days: [
          { day: 106, label: '2 Kings 10-12', book: '2 Kings', chapter: 10 },
          { day: 107, label: '2 Kings 13-15', book: '2 Kings', chapter: 13 },
          { day: 108, label: '2 Kings 16-18', book: '2 Kings', chapter: 16 },
          { day: 109, label: '2 Kings 19-21', book: '2 Kings', chapter: 19 },
          { day: 110, label: '2 Kings 22-25', book: '2 Kings', chapter: 22 },
          { day: 111, label: '1 Chronicles 1-3', book: '1 Chronicles', chapter: 1 },
          { day: 112, label: '1 Chronicles 4-6', book: '1 Chronicles', chapter: 4 }
        ]
      },
      {
        week: 17,
        title: "Week 17",
        days: [
          { day: 113, label: '1 Chronicles 7-9', book: '1 Chronicles', chapter: 7 },
          { day: 114, label: '1 Chronicles 10-12', book: '1 Chronicles', chapter: 10 },
          { day: 115, label: '1 Chronicles 13-15', book: '1 Chronicles', chapter: 13 },
          { day: 116, label: '1 Chronicles 16-18', book: '1 Chronicles', chapter: 16 },
          { day: 117, label: '1 Chronicles 19-21', book: '1 Chronicles', chapter: 19 },
          { day: 118, label: '1 Chronicles 22-24', book: '1 Chronicles', chapter: 22 },
          { day: 119, label: '1 Chronicles 25-27', book: '1 Chronicles', chapter: 25 }
        ]
      },
      {
        week: 18,
        title: "Week 18",
        days: [
          { day: 120, label: '1 Chronicles 28-29', book: '1 Chronicles', chapter: 28 },
          { day: 121, label: '2 Chronicles 1-3', book: '2 Chronicles', chapter: 1 },
          { day: 122, label: '2 Chronicles 4-6', book: '2 Chronicles', chapter: 4 },
          { day: 123, label: '2 Chronicles 7-9', book: '2 Chronicles', chapter: 7 },
          { day: 124, label: '2 Chronicles 10-12', book: '2 Chronicles', chapter: 10 },
          { day: 125, label: '2 Chronicles 13-15', book: '2 Chronicles', chapter: 13 },
          { day: 126, label: '2 Chronicles 16-18', book: '2 Chronicles', chapter: 16 }
        ]
      },
      {
        week: 19,
        title: "Week 19",
        days: [
          { day: 127, label: '2 Chronicles 19-21', book: '2 Chronicles', chapter: 19 },
          { day: 128, label: '2 Chronicles 22-24', book: '2 Chronicles', chapter: 22 },
          { day: 129, label: '2 Chronicles 25-27', book: '2 Chronicles', chapter: 25 },
          { day: 130, label: '2 Chronicles 28-30', book: '2 Chronicles', chapter: 28 },
          { day: 131, label: '2 Chronicles 31-33', book: '2 Chronicles', chapter: 31 },
          { day: 132, label: '2 Chronicles 34-36', book: '2 Chronicles', chapter: 34 },
          { day: 133, label: 'Ezra 1-3', book: 'Ezra', chapter: 1 }
        ]
      },
      {
        week: 20,
        title: "Week 20",
        days: [
          { day: 134, label: 'Ezra 4-6', book: 'Ezra', chapter: 4 },
          { day: 135, label: 'Ezra 7-10', book: 'Ezra', chapter: 7 },
          { day: 136, label: 'Nehemiah 1-3', book: 'Nehemiah', chapter: 1 },
          { day: 137, label: 'Nehemiah 4-6', book: 'Nehemiah', chapter: 4 },
          { day: 138, label: 'Nehemiah 7-9', book: 'Nehemiah', chapter: 7 },
          { day: 139, label: 'Nehemiah 10-13', book: 'Nehemiah', chapter: 10 },
          { day: 140, label: 'Esther 1-3', book: 'Esther', chapter: 1 }
        ]
      },
      {
        week: 21,
        title: "Week 21",
        days: [
          { day: 141, label: 'Esther 4-7', book: 'Esther', chapter: 4 },
          { day: 142, label: 'Esther 8-10', book: 'Esther', chapter: 8 },
          { day: 143, label: 'Job 1-3', book: 'Job', chapter: 1 },
          { day: 144, label: 'Job 4-7', book: 'Job', chapter: 4 },
          { day: 145, label: 'Job 8-11', book: 'Job', chapter: 8 },
          { day: 146, label: 'Job 12-15', book: 'Job', chapter: 12 },
          { day: 147, label: 'Job 16-19', book: 'Job', chapter: 16 }
        ]
      },
      {
        week: 22,
        title: "Week 22",
        days: [
          { day: 148, label: 'Job 20-23', book: 'Job', chapter: 20 },
          { day: 149, label: 'Job 24-27', book: 'Job', chapter: 24 },
          { day: 150, label: 'Job 28-31', book: 'Job', chapter: 28 },
          { day: 151, label: 'Job 32-35', book: 'Job', chapter: 32 },
          { day: 152, label: 'Job 36-39', book: 'Job', chapter: 36 },
          { day: 153, label: 'Job 40-42', book: 'Job', chapter: 40 },
          { day: 154, label: 'Psalms 1-4', book: 'Psalms', chapter: 1 }
        ]
      },
      {
        week: 23,
        title: "Week 23",
        days: [
          { day: 155, label: 'Psalms 5-8', book: 'Psalms', chapter: 5 },
          { day: 156, label: 'Psalms 9-12', book: 'Psalms', chapter: 9 },
          { day: 157, label: 'Psalms 13-17', book: 'Psalms', chapter: 13 },
          { day: 158, label: 'Psalms 18-21', book: 'Psalms', chapter: 18 },
          { day: 159, label: 'Psalms 22-25', book: 'Psalms', chapter: 22 },
          { day: 160, label: 'Psalms 26-30', book: 'Psalms', chapter: 26 },
          { day: 161, label: 'Psalms 31-34', book: 'Psalms', chapter: 31 }
        ]
      },
      {
        week: 24,
        title: "Week 24",
        days: [
          { day: 162, label: 'Psalms 35-38', book: 'Psalms', chapter: 35 },
          { day: 163, label: 'Psalms 39-42', book: 'Psalms', chapter: 39 },
          { day: 164, label: 'Psalms 43-47', book: 'Psalms', chapter: 43 },
          { day: 165, label: 'Psalms 48-51', book: 'Psalms', chapter: 48 },
          { day: 166, label: 'Psalms 52-56', book: 'Psalms', chapter: 52 },
          { day: 167, label: 'Psalms 57-60', book: 'Psalms', chapter: 57 },
          { day: 168, label: 'Psalms 61-65', book: 'Psalms', chapter: 61 }
        ]
      },
      {
        week: 25,
        title: "Week 25",
        days: [
          { day: 169, label: 'Psalms 66-69', book: 'Psalms', chapter: 66 },
          { day: 170, label: 'Psalms 70-73', book: 'Psalms', chapter: 70 },
          { day: 171, label: 'Psalms 74-77', book: 'Psalms', chapter: 74 },
          { day: 172, label: 'Psalms 78-80', book: 'Psalms', chapter: 78 },
          { day: 173, label: 'Psalms 81-85', book: 'Psalms', chapter: 81 },
          { day: 174, label: 'Psalms 86-89', book: 'Psalms', chapter: 86 },
          { day: 175, label: 'Psalms 90-93', book: 'Psalms', chapter: 90 }
        ]
      },
      {
        week: 26,
        title: "Week 26",
        days: [
          { day: 176, label: 'Psalms 94-98', book: 'Psalms', chapter: 94 },
          { day: 177, label: 'Psalms 99-103', book: 'Psalms', chapter: 99 },
          { day: 178, label: 'Psalms 104-106', book: 'Psalms', chapter: 104 },
          { day: 179, label: 'Psalms 107-109', book: 'Psalms', chapter: 107 },
          { day: 180, label: 'Psalms 110-115', book: 'Psalms', chapter: 110 },
          { day: 181, label: 'Psalms 116-118', book: 'Psalms', chapter: 116 },
          { day: 182, label: 'Psalm 119:1-72', book: 'Psalms', chapter: 119 }
        ]
      },
      {
        week: 27,
        title: "Week 27",
        days: [
          { day: 183, label: 'Psalm 119:73-176', book: 'Psalms', chapter: 119 },
          { day: 184, label: 'Psalms 120-125', book: 'Psalms', chapter: 120 },
          { day: 185, label: 'Psalms 126-131', book: 'Psalms', chapter: 126 },
          { day: 186, label: 'Psalms 132-136', book: 'Psalms', chapter: 132 },
          { day: 187, label: 'Psalms 137-141', book: 'Psalms', chapter: 137 },
          { day: 188, label: 'Psalms 142-150', book: 'Psalms', chapter: 142 },
          { day: 189, label: 'Proverbs 1-3', book: 'Proverbs', chapter: 1 }
        ]
      },
      {
        week: 28,
        title: "Week 28",
        days: [
          { day: 190, label: 'Proverbs 4-6', book: 'Proverbs', chapter: 4 },
          { day: 191, label: 'Proverbs 7-9', book: 'Proverbs', chapter: 7 },
          { day: 192, label: 'Proverbs 10-12', book: 'Proverbs', chapter: 10 },
          { day: 193, label: 'Proverbs 13-15', book: 'Proverbs', chapter: 13 },
          { day: 194, label: 'Proverbs 16-18', book: 'Proverbs', chapter: 16 },
          { day: 195, label: 'Proverbs 19-21', book: 'Proverbs', chapter: 19 },
          { day: 196, label: 'Proverbs 22-24', book: 'Proverbs', chapter: 22 }
        ]
      },
      {
        week: 29,
        title: "Week 29",
        days: [
          { day: 197, label: 'Proverbs 25-27', book: 'Proverbs', chapter: 25 },
          { day: 198, label: 'Proverbs 28-31', book: 'Proverbs', chapter: 28 },
          { day: 199, label: 'Ecclesiastes 1-4', book: 'Ecclesiastes', chapter: 1 },
          { day: 200, label: 'Ecclesiastes 5-8', book: 'Ecclesiastes', chapter: 5 },
          { day: 201, label: 'Ecclesiastes 9-12', book: 'Ecclesiastes', chapter: 9 },
          { day: 202, label: 'Song of Solomon 1-4', book: 'Song of Solomon', chapter: 1 },
          { day: 203, label: 'Song of Solomon 5-8', book: 'Song of Solomon', chapter: 5 }
        ]
      },
      {
        week: 30,
        title: "Week 30",
        days: [
          { day: 204, label: 'Isaiah 1-3', book: 'Isaiah', chapter: 1 },
          { day: 205, label: 'Isaiah 4-6', book: 'Isaiah', chapter: 4 },
          { day: 206, label: 'Isaiah 7-9', book: 'Isaiah', chapter: 7 },
          { day: 207, label: 'Isaiah 10-12', book: 'Isaiah', chapter: 10 },
          { day: 208, label: 'Isaiah 13-15', book: 'Isaiah', chapter: 13 },
          { day: 209, label: 'Isaiah 16-18', book: 'Isaiah', chapter: 16 },
          { day: 210, label: 'Isaiah 19-21', book: 'Isaiah', chapter: 19 }
        ]
      },
      {
        week: 31,
        title: "Week 31",
        days: [
          { day: 211, label: 'Isaiah 22-24', book: 'Isaiah', chapter: 22 },
          { day: 212, label: 'Isaiah 25-27', book: 'Isaiah', chapter: 25 },
          { day: 213, label: 'Isaiah 28-30', book: 'Isaiah', chapter: 28 },
          { day: 214, label: 'Isaiah 31-33', book: 'Isaiah', chapter: 31 },
          { day: 215, label: 'Isaiah 34-36', book: 'Isaiah', chapter: 34 },
          { day: 216, label: 'Isaiah 37-39', book: 'Isaiah', chapter: 37 },
          { day: 217, label: 'Isaiah 40-42', book: 'Isaiah', chapter: 40 }
        ]
      },
      {
        week: 32,
        title: "Week 32",
        days: [
          { day: 218, label: 'Isaiah 43-45', book: 'Isaiah', chapter: 43 },
          { day: 219, label: 'Isaiah 46-48', book: 'Isaiah', chapter: 46 },
          { day: 220, label: 'Isaiah 49-51', book: 'Isaiah', chapter: 49 },
          { day: 221, label: 'Isaiah 52-54', book: 'Isaiah', chapter: 52 },
          { day: 222, label: 'Isaiah 55-57', book: 'Isaiah', chapter: 55 },
          { day: 223, label: 'Isaiah 58-60', book: 'Isaiah', chapter: 58 },
          { day: 224, label: 'Isaiah 61-63', book: 'Isaiah', chapter: 61 }
        ]
      },
      {
        week: 33,
        title: "Week 33",
        days: [
          { day: 225, label: 'Isaiah 64-66', book: 'Isaiah', chapter: 64 },
          { day: 226, label: 'Jeremiah 1-3', book: 'Jeremiah', chapter: 1 },
          { day: 227, label: 'Jeremiah 4-6', book: 'Jeremiah', chapter: 4 },
          { day: 228, label: 'Jeremiah 7-9', book: 'Jeremiah', chapter: 7 },
          { day: 229, label: 'Jeremiah 10-12', book: 'Jeremiah', chapter: 10 },
          { day: 230, label: 'Jeremiah 13-15', book: 'Jeremiah', chapter: 13 },
          { day: 231, label: 'Jeremiah 16-18', book: 'Jeremiah', chapter: 16 }
        ]
      },
      {
        week: 34,
        title: "Week 34",
        days: [
          { day: 232, label: 'Jeremiah 19-21', book: 'Jeremiah', chapter: 19 },
          { day: 233, label: 'Jeremiah 22-24', book: 'Jeremiah', chapter: 22 },
          { day: 234, label: 'Jeremiah 25-27', book: 'Jeremiah', chapter: 25 },
          { day: 235, label: 'Jeremiah 28-30', book: 'Jeremiah', chapter: 28 },
          { day: 236, label: 'Jeremiah 31-33', book: 'Jeremiah', chapter: 31 },
          { day: 237, label: 'Jeremiah 34-36', book: 'Jeremiah', chapter: 34 },
          { day: 238, label: 'Jeremiah 37-39', book: 'Jeremiah', chapter: 37 }
        ]
      },
      {
        week: 35,
        title: "Week 35",
        days: [
          { day: 239, label: 'Jeremiah 40-42', book: 'Jeremiah', chapter: 40 },
          { day: 240, label: 'Jeremiah 43-45', book: 'Jeremiah', chapter: 43 },
          { day: 241, label: 'Jeremiah 46-48', book: 'Jeremiah', chapter: 46 },
          { day: 242, label: 'Jeremiah 49-50', book: 'Jeremiah', chapter: 49 },
          { day: 243, label: 'Jeremiah 51-52', book: 'Jeremiah', chapter: 51 },
          { day: 244, label: 'Lamentations 1-2', book: 'Lamentations', chapter: 1 },
          { day: 245, label: 'Lamentations 3-5', book: 'Lamentations', chapter: 3 }
        ]
      },
      {
        week: 36,
        title: "Week 36",
        days: [
          { day: 246, label: 'Ezekiel 1-3', book: 'Ezekiel', chapter: 1 },
          { day: 247, label: 'Ezekiel 4-6', book: 'Ezekiel', chapter: 4 },
          { day: 248, label: 'Ezekiel 7-9', book: 'Ezekiel', chapter: 7 },
          { day: 249, label: 'Ezekiel 10-12', book: 'Ezekiel', chapter: 10 },
          { day: 250, label: 'Ezekiel 13-15', book: 'Ezekiel', chapter: 13 },
          { day: 251, label: 'Ezekiel 16-18', book: 'Ezekiel', chapter: 16 },
          { day: 252, label: 'Ezekiel 19-21', book: 'Ezekiel', chapter: 19 }
        ]
      },
      {
        week: 37,
        title: "Week 37",
        days: [
          { day: 253, label: 'Ezekiel 22-24', book: 'Ezekiel', chapter: 22 },
          { day: 254, label: 'Ezekiel 25-27', book: 'Ezekiel', chapter: 25 },
          { day: 255, label: 'Ezekiel 28-30', book: 'Ezekiel', chapter: 28 },
          { day: 256, label: 'Ezekiel 31-33', book: 'Ezekiel', chapter: 31 },
          { day: 257, label: 'Ezekiel 34-36', book: 'Ezekiel', chapter: 34 },
          { day: 258, label: 'Ezekiel 37-39', book: 'Ezekiel', chapter: 37 },
          { day: 259, label: 'Ezekiel 40-42', book: 'Ezekiel', chapter: 40 }
        ]
      },
      {
        week: 38,
        title: "Week 38",
        days: [
          { day: 260, label: 'Ezekiel 43-45', book: 'Ezekiel', chapter: 43 },
          { day: 261, label: 'Ezekiel 46-48', book: 'Ezekiel', chapter: 46 },
          { day: 262, label: 'Daniel 1-3', book: 'Daniel', chapter: 1 },
          { day: 263, label: 'Daniel 4-6', book: 'Daniel', chapter: 4 },
          { day: 264, label: 'Daniel 7-9', book: 'Daniel', chapter: 7 },
          { day: 265, label: 'Daniel 10-12', book: 'Daniel', chapter: 10 },
          { day: 266, label: 'Hosea 1-3', book: 'Hosea', chapter: 1 }
        ]
      },
      {
        week: 39,
        title: "Week 39",
        days: [
          { day: 267, label: 'Hosea 4-6', book: 'Hosea', chapter: 4 },
          { day: 268, label: 'Hosea 7-9', book: 'Hosea', chapter: 7 },
          { day: 269, label: 'Hosea 10-12', book: 'Hosea', chapter: 10 },
          { day: 270, label: 'Hosea 13-14', book: 'Hosea', chapter: 13 },
          { day: 271, label: 'Joel 1-3', book: 'Joel', chapter: 1 },
          { day: 272, label: 'Amos 1-3', book: 'Amos', chapter: 1 },
          { day: 273, label: 'Amos 4-6', book: 'Amos', chapter: 4 }
        ]
      },
      {
        week: 40,
        title: "Week 40",
        days: [
          { day: 274, label: 'Amos 7-9', book: 'Amos', chapter: 7 },
          { day: 275, label: 'Obadiah 1', book: 'Obadiah', chapter: 1 },
          { day: 276, label: 'Jonah 1-4', book: 'Jonah', chapter: 1 },
          { day: 277, label: 'Micah 1-3', book: 'Micah', chapter: 1 },
          { day: 278, label: 'Micah 4-7', book: 'Micah', chapter: 4 },
          { day: 279, label: 'Nahum 1-3', book: 'Nahum', chapter: 1 },
          { day: 280, label: 'Habakkuk 1-3', book: 'Habakkuk', chapter: 1 }
        ]
      },
      {
        week: 41,
        title: "Week 41",
        days: [
          { day: 281, label: 'Zephaniah 1-3', book: 'Zephaniah', chapter: 1 },
          { day: 282, label: 'Haggai 1-2', book: 'Haggai', chapter: 1 },
          { day: 283, label: 'Zechariah 1-4', book: 'Zechariah', chapter: 1 },
          { day: 284, label: 'Zechariah 5-8', book: 'Zechariah', chapter: 5 },
          { day: 285, label: 'Zechariah 9-12', book: 'Zechariah', chapter: 9 },
          { day: 286, label: 'Zechariah 13-14', book: 'Zechariah', chapter: 13 },
          { day: 287, label: 'Malachi 1-4', book: 'Malachi', chapter: 1 }
        ]
      },
      {
        week: 42,
        title: "Week 42",
        days: [
          { day: 288, label: 'Matthew 1-3', book: 'Matthew', chapter: 1 },
          { day: 289, label: 'Matthew 4-6', book: 'Matthew', chapter: 4 },
          { day: 290, label: 'Matthew 7-9', book: 'Matthew', chapter: 7 },
          { day: 291, label: 'Matthew 10-12', book: 'Matthew', chapter: 10 },
          { day: 292, label: 'Matthew 13-15', book: 'Matthew', chapter: 13 },
          { day: 293, label: 'Matthew 16-18', book: 'Matthew', chapter: 16 },
          { day: 294, label: 'Matthew 19-21', book: 'Matthew', chapter: 19 }
        ]
      },
      {
        week: 43,
        title: "Week 43",
        days: [
          { day: 295, label: 'Matthew 22-24', book: 'Matthew', chapter: 22 },
          { day: 296, label: 'Matthew 25-28', book: 'Matthew', chapter: 25 },
          { day: 297, label: 'Mark 1-3', book: 'Mark', chapter: 1 },
          { day: 298, label: 'Mark 4-6', book: 'Mark', chapter: 4 },
          { day: 299, label: 'Mark 7-9', book: 'Mark', chapter: 7 },
          { day: 300, label: 'Mark 10-12', book: 'Mark', chapter: 10 },
          { day: 301, label: 'Mark 13-16', book: 'Mark', chapter: 13 }
        ]
      },
      {
        week: 44,
        title: "Week 44",
        days: [
          { day: 302, label: 'Luke 1-3', book: 'Luke', chapter: 1 },
          { day: 303, label: 'Luke 4-6', book: 'Luke', chapter: 4 },
          { day: 304, label: 'Luke 7-9', book: 'Luke', chapter: 7 },
          { day: 305, label: 'Luke 10-12', book: 'Luke', chapter: 10 },
          { day: 306, label: 'Luke 13-15', book: 'Luke', chapter: 13 },
          { day: 307, label: 'Luke 16-18', book: 'Luke', chapter: 16 },
          { day: 308, label: 'Luke 19-21', book: 'Luke', chapter: 19 }
        ]
      },
      {
        week: 45,
        title: "Week 45",
        days: [
          { day: 309, label: 'Luke 22-24', book: 'Luke', chapter: 22 },
          { day: 310, label: 'John 1-3', book: 'John', chapter: 1 },
          { day: 311, label: 'John 4-6', book: 'John', chapter: 4 },
          { day: 312, label: 'John 7-9', book: 'John', chapter: 7 },
          { day: 313, label: 'John 10-12', book: 'John', chapter: 10 },
          { day: 314, label: 'John 13-15', book: 'John', chapter: 13 },
          { day: 315, label: 'John 16-18', book: 'John', chapter: 16 }
        ]
      },
      {
        week: 46,
        title: "Week 46",
        days: [
          { day: 316, label: 'John 19-21', book: 'John', chapter: 19 },
          { day: 317, label: 'Acts 1-3', book: 'Acts', chapter: 1 },
          { day: 318, label: 'Acts 4-6', book: 'Acts', chapter: 4 },
          { day: 319, label: 'Acts 7-9', book: 'Acts', chapter: 7 },
          { day: 320, label: 'Acts 10-12', book: 'Acts', chapter: 10 },
          { day: 321, label: 'Acts 13-15', book: 'Acts', chapter: 13 },
          { day: 322, label: 'Acts 16-18', book: 'Acts', chapter: 16 }
        ]
      },
      {
        week: 47,
        title: "Week 47",
        days: [
          { day: 323, label: 'Acts 19-21', book: 'Acts', chapter: 19 },
          { day: 324, label: 'Acts 22-24', book: 'Acts', chapter: 22 },
          { day: 325, label: 'Acts 25-28', book: 'Acts', chapter: 25 },
          { day: 326, label: 'Romans 1-3', book: 'Romans', chapter: 1 },
          { day: 327, label: 'Romans 4-6', book: 'Romans', chapter: 4 },
          { day: 328, label: 'Romans 7-9', book: 'Romans', chapter: 7 },
          { day: 329, label: 'Romans 10-13', book: 'Romans', chapter: 10 }
        ]
      },
      {
        week: 48,
        title: "Week 48",
        days: [
          { day: 330, label: 'Romans 14-16', book: 'Romans', chapter: 14 },
          { day: 331, label: '1 Corinthians 1-4', book: '1 Corinthians', chapter: 1 },
          { day: 332, label: '1 Corinthians 5-8', book: '1 Corinthians', chapter: 5 },
          { day: 333, label: '1 Corinthians 9-12', book: '1 Corinthians', chapter: 9 },
          { day: 334, label: '1 Corinthians 13-16', book: '1 Corinthians', chapter: 13 },
          { day: 335, label: '2 Corinthians 1-4', book: '2 Corinthians', chapter: 1 },
          { day: 336, label: '2 Corinthians 5-9', book: '2 Corinthians', chapter: 5 }
        ]
      },
      {
        week: 49,
        title: "Week 49",
        days: [
          { day: 337, label: '2 Corinthians 10-13', book: '2 Corinthians', chapter: 10 },
          { day: 338, label: 'Galatians 1-3', book: 'Galatians', chapter: 1 },
          { day: 339, label: 'Galatians 4-6', book: 'Galatians', chapter: 4 },
          { day: 340, label: 'Ephesians 1-3', book: 'Ephesians', chapter: 1 },
          { day: 341, label: 'Ephesians 4-6', book: 'Ephesians', chapter: 4 },
          { day: 342, label: 'Philippians 1-4', book: 'Philippians', chapter: 1 },
          { day: 343, label: 'Colossians 1-4', book: 'Colossians', chapter: 1 }
        ]
      },
      {
        week: 50,
        title: "Week 50",
        days: [
          { day: 344, label: '1 Thessalonians 1-5', book: '1 Thessalonians', chapter: 1 },
          { day: 345, label: '2 Thessalonians 1-3', book: '2 Thessalonians', chapter: 1 },
          { day: 346, label: '1 Timothy 1-3', book: '1 Timothy', chapter: 1 },
          { day: 347, label: '1 Timothy 4-6', book: '1 Timothy', chapter: 4 },
          { day: 348, label: '2 Timothy 1-4', book: '2 Timothy', chapter: 1 },
          { day: 349, label: 'Titus 1-3', book: 'Titus', chapter: 1 },
          { day: 350, label: 'Philemon 1', book: 'Philemon', chapter: 1 }
        ]
      },
      {
        week: 51,
        title: "Week 51",
        days: [
          { day: 351, label: 'Hebrews 1-4', book: 'Hebrews', chapter: 1 },
          { day: 352, label: 'Hebrews 5-8', book: 'Hebrews', chapter: 5 },
          { day: 353, label: 'Hebrews 9-11', book: 'Hebrews', chapter: 9 },
          { day: 354, label: 'Hebrews 12-13', book: 'Hebrews', chapter: 12 },
          { day: 355, label: 'James 1-5', book: 'James', chapter: 1 },
          { day: 356, label: '1 Peter 1-5', book: '1 Peter', chapter: 1 },
          { day: 357, label: '2 Peter 1-3', book: '2 Peter', chapter: 1 }
        ]
      },
      {
        week: 52,
        title: "Week 52",
        days: [
          { day: 358, label: '1 John 1-5', book: '1 John', chapter: 1 },
          { day: 359, label: '2 John 1, 3 John 1, Jude 1', book: '2 John', chapter: 1 },
          { day: 360, label: 'Revelation 1-3', book: 'Revelation', chapter: 1 },
          { day: 361, label: 'Revelation 4-8', book: 'Revelation', chapter: 4 },
          { day: 362, label: 'Revelation 9-13', book: 'Revelation', chapter: 9 },
          { day: 363, label: 'Revelation 14-18', book: 'Revelation', chapter: 14 },
          { day: 364, label: 'Revelation 19-22', book: 'Revelation', chapter: 19 },
          { day: 365, label: 'Year Completion Celebration', book: 'Revelation', chapter: 22 }
        ]
      }
    ]
  },
  ot_relaxed: {
    title: "Old Testament Relaxed (1-Year)",
    description: "A steady, comfortable pace through the Old Testament.",
    weeks: [
      {
        week: 1,
        title: "Week 1",
        days: [
          { day: 1, label: 'Genesis 1-5', book: 'Genesis', chapter: 1 },
          { day: 2, label: 'Genesis 6-10', book: 'Genesis', chapter: 6 },
          { day: 3, label: 'Genesis 11-15', book: 'Genesis', chapter: 11 }
        ]
      }
    ]
  },
  ot_moderate: {
    title: "Old Testament Moderate (6-Month)",
    description: "A balanced pace through the Old Testament in 6 months.",
    weeks: [
      {
        week: 1,
        title: "Week 1",
        days: [
          { day: 1, label: 'Genesis 1-10', book: 'Genesis', chapter: 1 },
          { day: 2, label: 'Genesis 11-20', book: 'Genesis', chapter: 11 }
        ]
      }
    ]
  },
  ot_intensive: {
    title: "Old Testament Intensive (3-Month)",
    description: "An intensive sprint through the Old Testament in 3 months.",
    weeks: [
      {
        week: 1,
        title: "Week 1",
        days: [
          { day: 1, label: 'Genesis 1-15', book: 'Genesis', chapter: 1 },
          { day: 2, label: 'Genesis 16-30', book: 'Genesis', chapter: 16 }
        ]
      }
    ]
  },
  nt_relaxed: {
    title: "New Testament Relaxed (6-Month)",
    description: "A balanced 26-week daily pace covering all 260 chapters of the New Testament with a relaxed pace.",
    weeks: [
      {
        week: 1,
        title: "Week 1",
        days: [
          { day: 1, label: 'Matthew 1-2', book: 'Matthew', chapter: 1 },
          { day: 2, label: 'Matthew 3', book: 'Matthew', chapter: 3 },
          { day: 3, label: 'Matthew 4-5', book: 'Matthew', chapter: 4 },
          { day: 4, label: 'Matthew 6', book: 'Matthew', chapter: 6 },
          { day: 5, label: 'Matthew 7-8', book: 'Matthew', chapter: 7 },
          { day: 6, label: 'Matthew 9', book: 'Matthew', chapter: 9 },
          { day: 7, label: 'Matthew 10', book: 'Matthew', chapter: 10 }
        ]
      },
      {
        week: 2,
        title: "Week 2",
        days: [
          { day: 8, label: 'Matthew 11-12', book: 'Matthew', chapter: 11 },
          { day: 9, label: 'Matthew 13', book: 'Matthew', chapter: 13 },
          { day: 10, label: 'Matthew 14-15', book: 'Matthew', chapter: 14 },
          { day: 11, label: 'Matthew 16', book: 'Matthew', chapter: 16 },
          { day: 12, label: 'Matthew 17-18', book: 'Matthew', chapter: 17 },
          { day: 13, label: 'Matthew 19', book: 'Matthew', chapter: 19 },
          { day: 14, label: 'Matthew 20', book: 'Matthew', chapter: 20 }
        ]
      },
      {
        week: 3,
        title: "Week 3",
        days: [
          { day: 15, label: 'Matthew 21-22', book: 'Matthew', chapter: 21 },
          { day: 16, label: 'Matthew 23', book: 'Matthew', chapter: 23 },
          { day: 17, label: 'Matthew 24-25', book: 'Matthew', chapter: 24 },
          { day: 18, label: 'Matthew 26', book: 'Matthew', chapter: 26 },
          { day: 19, label: 'Matthew 27-28', book: 'Matthew', chapter: 27 },
          { day: 20, label: 'Mark 1', book: 'Mark', chapter: 1 },
          { day: 21, label: 'Mark 2', book: 'Mark', chapter: 2 }
        ]
      },
      {
        week: 4,
        title: "Week 4",
        days: [
          { day: 22, label: 'Mark 3-4', book: 'Mark', chapter: 3 },
          { day: 23, label: 'Mark 5', book: 'Mark', chapter: 5 },
          { day: 24, label: 'Mark 6-7', book: 'Mark', chapter: 6 },
          { day: 25, label: 'Mark 8', book: 'Mark', chapter: 8 },
          { day: 26, label: 'Mark 9-10', book: 'Mark', chapter: 9 },
          { day: 27, label: 'Mark 11', book: 'Mark', chapter: 11 },
          { day: 28, label: 'Mark 12', book: 'Mark', chapter: 12 }
        ]
      },
      {
        week: 5,
        title: "Week 5",
        days: [
          { day: 29, label: 'Mark 13-14', book: 'Mark', chapter: 13 },
          { day: 30, label: 'Mark 15', book: 'Mark', chapter: 15 },
          { day: 31, label: 'Mark 16', book: 'Mark', chapter: 16 },
          { day: 32, label: 'Luke 1', book: 'Luke', chapter: 1 },
          { day: 33, label: 'Luke 2-3', book: 'Luke', chapter: 2 },
          { day: 34, label: 'Luke 4', book: 'Luke', chapter: 4 },
          { day: 35, label: 'Luke 5-6', book: 'Luke', chapter: 5 }
        ]
      },
      {
        week: 6,
        title: "Week 6",
        days: [
          { day: 36, label: 'Luke 7', book: 'Luke', chapter: 7 },
          { day: 37, label: 'Luke 8-9', book: 'Luke', chapter: 8 },
          { day: 38, label: 'Luke 10', book: 'Luke', chapter: 10 },
          { day: 39, label: 'Luke 11-12', book: 'Luke', chapter: 11 },
          { day: 40, label: 'Luke 13', book: 'Luke', chapter: 13 },
          { day: 41, label: 'Luke 14-15', book: 'Luke', chapter: 14 },
          { day: 42, label: 'Luke 16', book: 'Luke', chapter: 16 }
        ]
      },
      {
        week: 7,
        title: "Week 7",
        days: [
          { day: 43, label: 'Luke 17-18', book: 'Luke', chapter: 17 },
          { day: 44, label: 'Luke 19', book: 'Luke', chapter: 19 },
          { day: 45, label: 'Luke 20-21', book: 'Luke', chapter: 20 },
          { day: 46, label: 'Luke 22', book: 'Luke', chapter: 22 },
          { day: 47, label: 'Luke 23-24', book: 'Luke', chapter: 23 },
          { day: 48, label: 'John 1', book: 'John', chapter: 1 },
          { day: 49, label: 'John 2-3', book: 'John', chapter: 2 }
        ]
      },
      {
        week: 8,
        title: "Week 8",
        days: [
          { day: 50, label: 'John 4', book: 'John', chapter: 4 },
          { day: 51, label: 'John 5-6', book: 'John', chapter: 5 },
          { day: 52, label: 'John 7', book: 'John', chapter: 7 },
          { day: 53, label: 'John 8-9', book: 'John', chapter: 8 },
          { day: 54, label: 'John 10', book: 'John', chapter: 10 },
          { day: 55, label: 'John 11-12', book: 'John', chapter: 11 },
          { day: 56, label: 'John 13', book: 'John', chapter: 13 }
        ]
      },
      {
        week: 9,
        title: "Week 9",
        days: [
          { day: 57, label: 'John 14-15', book: 'John', chapter: 14 },
          { day: 58, label: 'John 16', book: 'John', chapter: 16 },
          { day: 59, label: 'John 17-18', book: 'John', chapter: 17 },
          { day: 60, label: 'John 19', book: 'John', chapter: 19 },
          { day: 61, label: 'John 20-21', book: 'John', chapter: 20 },
          { day: 62, label: 'Acts 1', book: 'Acts', chapter: 1 },
          { day: 63, label: 'Acts 2-3', book: 'Acts', chapter: 2 }
        ]
      },
      {
        week: 10,
        title: "Week 10",
        days: [
          { day: 64, label: 'Acts 4', book: 'Acts', chapter: 4 },
          { day: 65, label: 'Acts 5-6', book: 'Acts', chapter: 5 },
          { day: 66, label: 'Acts 7', book: 'Acts', chapter: 7 },
          { day: 67, label: 'Acts 8-9', book: 'Acts', chapter: 8 },
          { day: 68, label: 'Acts 10', book: 'Acts', chapter: 10 },
          { day: 69, label: 'Acts 11-12', book: 'Acts', chapter: 11 },
          { day: 70, label: 'Acts 13', book: 'Acts', chapter: 13 }
        ]
      },
      {
        week: 11,
        title: "Week 11",
        days: [
          { day: 71, label: 'Acts 14-15', book: 'Acts', chapter: 14 },
          { day: 72, label: 'Acts 16', book: 'Acts', chapter: 16 },
          { day: 73, label: 'Acts 17-18', book: 'Acts', chapter: 17 },
          { day: 74, label: 'Acts 19', book: 'Acts', chapter: 19 },
          { day: 75, label: 'Acts 20-21', book: 'Acts', chapter: 20 },
          { day: 76, label: 'Acts 22', book: 'Acts', chapter: 22 },
          { day: 77, label: 'Acts 23-24', book: 'Acts', chapter: 23 }
        ]
      },
      {
        week: 12,
        title: "Week 12",
        days: [
          { day: 78, label: 'Acts 25', book: 'Acts', chapter: 25 },
          { day: 79, label: 'Acts 26-27', book: 'Acts', chapter: 26 },
          { day: 80, label: 'Acts 28', book: 'Acts', chapter: 28 },
          { day: 81, label: 'Romans 1-2', book: 'Romans', chapter: 1 },
          { day: 82, label: 'Romans 3', book: 'Romans', chapter: 3 },
          { day: 83, label: 'Romans 4-5', book: 'Romans', chapter: 4 },
          { day: 84, label: 'Romans 6', book: 'Romans', chapter: 6 }
        ]
      },
      {
        week: 13,
        title: "Week 13",
        days: [
          { day: 85, label: 'Romans 7-8', book: 'Romans', chapter: 7 },
          { day: 86, label: 'Romans 9', book: 'Romans', chapter: 9 },
          { day: 87, label: 'Romans 10-11', book: 'Romans', chapter: 10 },
          { day: 88, label: 'Romans 12', book: 'Romans', chapter: 12 },
          { day: 89, label: 'Romans 13-14', book: 'Romans', chapter: 13 },
          { day: 90, label: 'Romans 15', book: 'Romans', chapter: 15 },
          { day: 91, label: 'Romans 16-1 Corinthians 1', book: 'Romans', chapter: 16 }
        ]
      },
      {
        week: 14,
        title: "Week 14",
        days: [
          { day: 92, label: '1 Corinthians 2', book: '1 Corinthians', chapter: 2 },
          { day: 93, label: '1 Corinthians 3-4', book: '1 Corinthians', chapter: 3 },
          { day: 94, label: '1 Corinthians 5', book: '1 Corinthians', chapter: 5 },
          { day: 95, label: '1 Corinthians 6-7', book: '1 Corinthians', chapter: 6 },
          { day: 96, label: '1 Corinthians 8', book: '1 Corinthians', chapter: 8 },
          { day: 97, label: '1 Corinthians 9-10', book: '1 Corinthians', chapter: 9 },
          { day: 98, label: '1 Corinthians 11', book: '1 Corinthians', chapter: 11 }
        ]
      },
      {
        week: 15,
        title: "Week 15",
        days: [
          { day: 99, label: '1 Corinthians 12-13', book: '1 Corinthians', chapter: 12 },
          { day: 100, label: '1 Corinthians 14', book: '1 Corinthians', chapter: 14 },
          { day: 101, label: '1 Corinthians 15-16', book: '1 Corinthians', chapter: 15 },
          { day: 102, label: '2 Corinthians 1', book: '2 Corinthians', chapter: 1 },
          { day: 103, label: '2 Corinthians 2-3', book: '2 Corinthians', chapter: 2 },
          { day: 104, label: '2 Corinthians 4', book: '2 Corinthians', chapter: 4 },
          { day: 105, label: '2 Corinthians 5-6', book: '2 Corinthians', chapter: 5 }
        ]
      },
      {
        week: 16,
        title: "Week 16",
        days: [
          { day: 106, label: '2 Corinthians 7', book: '2 Corinthians', chapter: 7 },
          { day: 107, label: '2 Corinthians 8-9', book: '2 Corinthians', chapter: 8 },
          { day: 108, label: '2 Corinthians 10', book: '2 Corinthians', chapter: 10 },
          { day: 109, label: '2 Corinthians 11-12', book: '2 Corinthians', chapter: 11 },
          { day: 110, label: '2 Corinthians 13', book: '2 Corinthians', chapter: 13 },
          { day: 111, label: 'Galatians 1-2', book: 'Galatians', chapter: 1 },
          { day: 112, label: 'Galatians 3', book: 'Galatians', chapter: 3 }
        ]
      },
      {
        week: 17,
        title: "Week 17",
        days: [
          { day: 113, label: 'Galatians 4-5', book: 'Galatians', chapter: 4 },
          { day: 114, label: 'Galatians 6', book: 'Galatians', chapter: 6 },
          { day: 115, label: 'Ephesians 1-2', book: 'Ephesians', chapter: 1 },
          { day: 116, label: 'Ephesians 3', book: 'Ephesians', chapter: 3 },
          { day: 117, label: 'Ephesians 4-5', book: 'Ephesians', chapter: 4 },
          { day: 118, label: 'Ephesians 6', book: 'Ephesians', chapter: 6 },
          { day: 119, label: 'Philippians 1-2', book: 'Philippians', chapter: 1 }
        ]
      },
      {
        week: 18,
        title: "Week 18",
        days: [
          { day: 120, label: 'Philippians 3', book: 'Philippians', chapter: 3 },
          { day: 121, label: 'Philippians 4-Colossians 1', book: 'Philippians', chapter: 4 },
          { day: 122, label: 'Colossians 2', book: 'Colossians', chapter: 2 },
          { day: 123, label: 'Colossians 3-4', book: 'Colossians', chapter: 3 },
          { day: 124, label: '1 Thessalonians 1', book: '1 Thessalonians', chapter: 1 },
          { day: 125, label: '1 Thessalonians 2-3', book: '1 Thessalonians', chapter: 2 },
          { day: 126, label: '1 Thessalonians 4', book: '1 Thessalonians', chapter: 4 }
        ]
      },
      {
        week: 19,
        title: "Week 19",
        days: [
          { day: 127, label: '1 Thessalonians 5-2 Thessalonians 1', book: '1 Thessalonians', chapter: 5 },
          { day: 128, label: '2 Thessalonians 2', book: '2 Thessalonians', chapter: 2 },
          { day: 129, label: '2 Thessalonians 3-1 Timothy 1', book: '2 Thessalonians', chapter: 3 },
          { day: 130, label: '1 Timothy 2', book: '1 Timothy', chapter: 2 },
          { day: 131, label: '1 Timothy 3-4', book: '1 Timothy', chapter: 3 },
          { day: 132, label: '1 Timothy 5', book: '1 Timothy', chapter: 5 },
          { day: 133, label: '1 Timothy 6-2 Timothy 1', book: '1 Timothy', chapter: 6 }
        ]
      },
      {
        week: 20,
        title: "Week 20",
        days: [
          { day: 134, label: '2 Timothy 2', book: '2 Timothy', chapter: 2 },
          { day: 135, label: '2 Timothy 3-4', book: '2 Timothy', chapter: 3 },
          { day: 136, label: 'Titus 1', book: 'Titus', chapter: 1 },
          { day: 137, label: 'Titus 2-3', book: 'Titus', chapter: 2 },
          { day: 138, label: 'Philemon 1', book: 'Philemon', chapter: 1 },
          { day: 139, label: 'Hebrews 1-2', book: 'Hebrews', chapter: 1 },
          { day: 140, label: 'Hebrews 3', book: 'Hebrews', chapter: 3 }
        ]
      },
      {
        week: 21,
        title: "Week 21",
        days: [
          { day: 141, label: 'Hebrews 4-5', book: 'Hebrews', chapter: 4 },
          { day: 142, label: 'Hebrews 6', book: 'Hebrews', chapter: 6 },
          { day: 143, label: 'Hebrews 7-8', book: 'Hebrews', chapter: 7 },
          { day: 144, label: 'Hebrews 9', book: 'Hebrews', chapter: 9 },
          { day: 145, label: 'Hebrews 10-11', book: 'Hebrews', chapter: 10 },
          { day: 146, label: 'Hebrews 12', book: 'Hebrews', chapter: 12 },
          { day: 147, label: 'Hebrews 13-James 1', book: 'Hebrews', chapter: 13 }
        ]
      },
      {
        week: 22,
        title: "Week 22",
        days: [
          { day: 148, label: 'James 2', book: 'James', chapter: 2 },
          { day: 149, label: 'James 3-4', book: 'James', chapter: 3 },
          { day: 150, label: 'James 5', book: 'James', chapter: 5 },
          { day: 151, label: '1 Peter 1-2', book: '1 Peter', chapter: 1 },
          { day: 152, label: '1 Peter 3', book: '1 Peter', chapter: 3 },
          { day: 153, label: '1 Peter 4-5', book: '1 Peter', chapter: 4 },
          { day: 154, label: '2 Peter 1', book: '2 Peter', chapter: 1 }
        ]
      },
      {
        week: 23,
        title: "Week 23",
        days: [
          { day: 155, label: '2 Peter 2-3', book: '2 Peter', chapter: 2 },
          { day: 156, label: '1 John 1', book: '1 John', chapter: 1 },
          { day: 157, label: '1 John 2-3', book: '1 John', chapter: 2 },
          { day: 158, label: '1 John 4', book: '1 John', chapter: 4 },
          { day: 159, label: '1 John 5-2 John 1', book: '1 John', chapter: 5 },
          { day: 160, label: '3 John 1', book: '3 John', chapter: 1 },
          { day: 161, label: 'Jude', book: 'Jude', chapter: 1 }
        ]
      },
      {
        week: 24,
        title: "Week 24",
        days: [
          { day: 162, label: 'Revelation 1', book: 'Revelation', chapter: 1 },
          { day: 163, label: 'Revelation 2-3', book: 'Revelation', chapter: 2 },
          { day: 164, label: 'Revelation 4', book: 'Revelation', chapter: 4 },
          { day: 165, label: 'Revelation 5', book: 'Revelation', chapter: 5 },
          { day: 166, label: 'Revelation 6-7', book: 'Revelation', chapter: 6 },
          { day: 167, label: 'Revelation 8', book: 'Revelation', chapter: 8 },
          { day: 168, label: 'Revelation 9-10', book: 'Revelation', chapter: 9 }
        ]
      },
      {
        week: 25,
        title: "Week 25",
        days: [
          { day: 169, label: 'Revelation 11', book: 'Revelation', chapter: 11 },
          { day: 170, label: 'Revelation 12-13', book: 'Revelation', chapter: 12 },
          { day: 171, label: 'Revelation 14', book: 'Revelation', chapter: 14 },
          { day: 172, label: 'Revelation 15-16', book: 'Revelation', chapter: 15 },
          { day: 173, label: 'Revelation 17', book: 'Revelation', chapter: 17 },
          { day: 174, label: 'Revelation 18', book: 'Revelation', chapter: 18 },
          { day: 175, label: 'Revelation 19-20', book: 'Revelation', chapter: 19 }
        ]
      },
      {
        week: 26,
        title: "Week 26",
        days: [
          { day: 176, label: 'Revelation 21', book: 'Revelation', chapter: 21 },
          { day: 177, label: 'Revelation 22', book: 'Revelation', chapter: 22 },
          { day: 178, label: 'Buffer Day', book: 'Revelation', chapter: 22 },
          { day: 179, label: 'Buffer Day', book: 'Revelation', chapter: 22 },
          { day: 180, label: 'Buffer Day', book: 'Revelation', chapter: 22 },
          { day: 181, label: 'Buffer Day', book: 'Revelation', chapter: 22 },
          { day: 182, label: 'Buffer Day', book: 'Revelation', chapter: 22 }
        ]
      }
    ]
  },
  nt_moderate: {
    title: "New Testament Moderate (3-Month)",
    description: "A balanced 13-week daily pace covering all 260 chapters of the New Testament at a moderate pace.",
    weeks: [
      {
        week: 1,
        title: "Week 1",
        days: [
          { day: 1, label: 'Matthew 1-3', book: 'Matthew', chapter: 1 },
          { day: 2, label: 'Matthew 4-6', book: 'Matthew', chapter: 4 },
          { day: 3, label: 'Matthew 7-9', book: 'Matthew', chapter: 7 },
          { day: 4, label: 'Matthew 10-12', book: 'Matthew', chapter: 10 },
          { day: 5, label: 'Matthew 13-15', book: 'Matthew', chapter: 13 },
          { day: 6, label: 'Matthew 16-18', book: 'Matthew', chapter: 16 },
          { day: 7, label: 'Matthew 19-21', book: 'Matthew', chapter: 19 }
        ]
      },
      {
        week: 2,
        title: "Week 2",
        days: [
          { day: 8, label: 'Matthew 22-24', book: 'Matthew', chapter: 22 },
          { day: 9, label: 'Matthew 25-28', book: 'Matthew', chapter: 25 },
          { day: 10, label: 'Mark 1-3', book: 'Mark', chapter: 1 },
          { day: 11, label: 'Mark 4-6', book: 'Mark', chapter: 4 },
          { day: 12, label: 'Mark 7-9', book: 'Mark', chapter: 7 },
          { day: 13, label: 'Mark 10-12', book: 'Mark', chapter: 10 },
          { day: 14, label: 'Mark 13-16', book: 'Mark', chapter: 13 }
        ]
      },
      {
        week: 3,
        title: "Week 3",
        days: [
          { day: 15, label: 'Luke 1-3', book: 'Luke', chapter: 1 },
          { day: 16, label: 'Luke 4-6', book: 'Luke', chapter: 4 },
          { day: 17, label: 'Luke 7-9', book: 'Luke', chapter: 7 },
          { day: 18, label: 'Luke 10-12', book: 'Luke', chapter: 10 },
          { day: 19, label: 'Luke 13-15', book: 'Luke', chapter: 13 },
          { day: 20, label: 'Luke 16-18', book: 'Luke', chapter: 16 },
          { day: 21, label: 'Luke 19-21', book: 'Luke', chapter: 19 }
        ]
      },
      {
        week: 4,
        title: "Week 4",
        days: [
          { day: 22, label: 'Luke 22-24', book: 'Luke', chapter: 22 },
          { day: 23, label: 'John 1-3', book: 'John', chapter: 1 },
          { day: 24, label: 'John 4-6', book: 'John', chapter: 4 },
          { day: 25, label: 'John 7-9', book: 'John', chapter: 7 },
          { day: 26, label: 'John 10-12', book: 'John', chapter: 10 },
          { day: 27, label: 'John 13-15', book: 'John', chapter: 13 },
          { day: 28, label: 'John 16-18', book: 'John', chapter: 16 }
        ]
      },
      {
        week: 5,
        title: "Week 5",
        days: [
          { day: 29, label: 'John 19-21', book: 'John', chapter: 19 },
          { day: 30, label: 'Acts 1-3', book: 'Acts', chapter: 1 },
          { day: 31, label: 'Acts 4-6', book: 'Acts', chapter: 4 },
          { day: 32, label: 'Acts 7-9', book: 'Acts', chapter: 7 },
          { day: 33, label: 'Acts 10-12', book: 'Acts', chapter: 10 },
          { day: 34, label: 'Acts 13-15', book: 'Acts', chapter: 13 },
          { day: 35, label: 'Acts 16-18', book: 'Acts', chapter: 16 }
        ]
      },
      {
        week: 6,
        title: "Week 6",
        days: [
          { day: 36, label: 'Acts 19-21', book: 'Acts', chapter: 19 },
          { day: 37, label: 'Acts 22-24', book: 'Acts', chapter: 22 },
          { day: 38, label: 'Acts 25-28', book: 'Acts', chapter: 25 },
          { day: 39, label: 'Romans 1-3', book: 'Romans', chapter: 1 },
          { day: 40, label: 'Romans 4-6', book: 'Romans', chapter: 4 },
          { day: 41, label: 'Romans 7-9', book: 'Romans', chapter: 7 },
          { day: 42, label: 'Romans 10-12', book: 'Romans', chapter: 10 }
        ]
      },
      {
        week: 7,
        title: "Week 7",
        days: [
          { day: 43, label: 'Romans 13-16', book: 'Romans', chapter: 13 },
          { day: 44, label: '1 Corinthians 1-4', book: '1 Corinthians', chapter: 1 },
          { day: 45, label: '1 Corinthians 5-8', book: '1 Corinthians', chapter: 5 },
          { day: 46, label: '1 Corinthians 9-12', book: '1 Corinthians', chapter: 9 },
          { day: 47, label: '1 Corinthians 13-16', book: '1 Corinthians', chapter: 13 },
          { day: 48, label: '2 Corinthians 1-4', book: '2 Corinthians', chapter: 1 },
          { day: 49, label: '2 Corinthians 5-8', book: '2 Corinthians', chapter: 5 }
        ]
      },
      {
        week: 8,
        title: "Week 8",
        days: [
          { day: 50, label: '2 Corinthians 9-13', book: '2 Corinthians', chapter: 9 },
          { day: 51, label: 'Galatians 1-3', book: 'Galatians', chapter: 1 },
          { day: 52, label: 'Galatians 4-6', book: 'Galatians', chapter: 4 },
          { day: 53, label: 'Ephesians 1-3', book: 'Ephesians', chapter: 1 },
          { day: 54, label: 'Ephesians 4-6', book: 'Ephesians', chapter: 4 },
          { day: 55, label: 'Philippians 1-4', book: 'Philippians', chapter: 1 },
          { day: 56, label: 'Colossians 1-4', book: 'Colossians', chapter: 1 }
        ]
      },
      {
        week: 9,
        title: "Week 9",
        days: [
          { day: 57, label: '1 Thessalonians 1-5', book: '1 Thessalonians', chapter: 1 },
          { day: 58, label: '2 Thessalonians 1-3', book: '2 Thessalonians', chapter: 1 },
          { day: 59, label: '1 Timothy 1-3', book: '1 Timothy', chapter: 1 },
          { day: 60, label: '1 Timothy 4-6', book: '1 Timothy', chapter: 4 },
          { day: 61, label: '2 Timothy 1-4', book: '2 Timothy', chapter: 1 },
          { day: 62, label: 'Titus 1-3', book: 'Titus', chapter: 1 },
          { day: 63, label: 'Philemon 1', book: 'Philemon', chapter: 1 }
        ]
      },
      {
        week: 10,
        title: "Week 10",
        days: [
          { day: 64, label: 'Hebrews 1-4', book: 'Hebrews', chapter: 1 },
          { day: 65, label: 'Hebrews 5-8', book: 'Hebrews', chapter: 5 },
          { day: 66, label: 'Hebrews 9-11', book: 'Hebrews', chapter: 9 },
          { day: 67, label: 'Hebrews 12-13', book: 'Hebrews', chapter: 12 },
          { day: 68, label: 'James 1-3', book: 'James', chapter: 1 },
          { day: 69, label: 'James 4-5', book: 'James', chapter: 4 },
          { day: 70, label: '1 Peter 1-3', book: '1 Peter', chapter: 1 }
        ]
      },
      {
        week: 11,
        title: "Week 11",
        days: [
          { day: 71, label: '1 Peter 4-5', book: '1 Peter', chapter: 4 },
          { day: 72, label: '2 Peter 1-3', book: '2 Peter', chapter: 1 },
          { day: 73, label: '1 John 1-3', book: '1 John', chapter: 1 },
          { day: 74, label: '1 John 4-5', book: '1 John', chapter: 4 },
          { day: 75, label: '2 John 1', book: '2 John', chapter: 1 },
          { day: 76, label: '3 John 1', book: '3 John', chapter: 1 },
          { day: 77, label: 'Jude 1', book: 'Jude', chapter: 1 }
        ]
      },
      {
        week: 12,
        title: "Week 12",
        days: [
          { day: 78, label: 'Revelation 1-3', book: 'Revelation', chapter: 1 },
          { day: 79, label: 'Revelation 4-6', book: 'Revelation', chapter: 4 },
          { day: 80, label: 'Revelation 7-9', book: 'Revelation', chapter: 7 },
          { day: 81, label: 'Revelation 10-12', book: 'Revelation', chapter: 10 },
          { day: 82, label: 'Revelation 13-15', book: 'Revelation', chapter: 13 },
          { day: 83, label: 'Revelation 16-18', book: 'Revelation', chapter: 16 },
          { day: 84, label: 'Revelation 19-22', book: 'Revelation', chapter: 19 }
        ]
      },
      {
        week: 13,
        title: "Week 13",
        days: [
          { day: 85, label: 'Review & Reflection Day 1', book: 'Revelation', chapter: 22 },
          { day: 86, label: 'Review & Reflection Day 2', book: 'Revelation', chapter: 22 },
          { day: 87, label: 'Review & Reflection Day 3', book: 'Revelation', chapter: 22 },
          { day: 88, label: 'Review & Reflection Day 4', book: 'Revelation', chapter: 22 },
          { day: 89, label: 'Catch-up Day 1', book: 'Revelation', chapter: 22 },
          { day: 90, label: 'Catch-up Day 2', book: 'Revelation', chapter: 22 },
          { day: 91, label: 'Plan Completion Celebration', book: 'Revelation', chapter: 22 }
        ]
      }
    ]
  },
  nt_intensive: {
    title: "New Testament Intensive (1-Month)",
    description: "An intensive walk through the entire New Testament in 30 days.",
    weeks: [
      {
        week: 1,
        title: "Week 1",
        days: [
          { day: 1, label: 'Matthew 1-7', book: 'Matthew', chapter: 1 },
          { day: 2, label: 'Matthew 8-14', book: 'Matthew', chapter: 8 },
          { day: 3, label: 'Matthew 15-21', book: 'Matthew', chapter: 15 },
          { day: 4, label: 'Matthew 22-28', book: 'Matthew', chapter: 22 },
          { day: 5, label: 'Mark 1-8', book: 'Mark', chapter: 1 },
          { day: 6, label: 'Mark 9-16', book: 'Mark', chapter: 9 },
          { day: 7, label: 'Luke 1-6', book: 'Luke', chapter: 1 }
        ]
      },
      {
        week: 2,
        title: "Week 2",
        days: [
          { day: 8, label: 'Luke 7-12', book: 'Luke', chapter: 7 },
          { day: 9, label: 'Luke 13-18', book: 'Luke', chapter: 13 },
          { day: 10, label: 'Luke 19-24', book: 'Luke', chapter: 19 },
          { day: 11, label: 'John 1-7', book: 'John', chapter: 1 },
          { day: 12, label: 'John 8-14', book: 'John', chapter: 8 },
          { day: 13, label: 'John 15-21', book: 'John', chapter: 15 },
          { day: 14, label: 'Acts 1-7', book: 'Acts', chapter: 1 }
        ]
      },
      {
        week: 3,
        title: "Week 3",
        days: [
          { day: 15, label: 'Acts 8-14', book: 'Acts', chapter: 8 },
          { day: 16, label: 'Acts 15-21', book: 'Acts', chapter: 15 },
          { day: 17, label: 'Acts 22-28', book: 'Acts', chapter: 22 },
          { day: 18, label: 'Romans 1-8', book: 'Romans', chapter: 1 },
          { day: 19, label: 'Romans 9-16', book: 'Romans', chapter: 9 },
          { day: 20, label: '1 Corinthians 1-8', book: '1 Corinthians', chapter: 1 },
          { day: 21, label: '1 Corinthians 9-16', book: '1 Corinthians', chapter: 9 }
        ]
      },
      {
        week: 4,
        title: "Week 4",
        days: [
          { day: 22, label: '2 Corinthians 1-13', book: '2 Corinthians', chapter: 1 },
          { day: 23, label: 'Galatians - Ephesians', book: 'Galatians', chapter: 1 },
          { day: 24, label: 'Philippians - Colossians', book: 'Philippians', chapter: 1 },
          { day: 25, label: '1 Thess - 2 Thess - 1 Tim', book: '1 Thessalonians', chapter: 1 },
          { day: 26, label: '2 Tim - Titus - Philemon - Hebrews 1-6', book: '2 Timothy', chapter: 1 },
          { day: 27, label: 'Hebrews 7-13 - James', book: 'Hebrews', chapter: 7 },
          { day: 28, label: '1 Peter - 2 Peter - 1 John - 3 John - Jude', book: '1 Peter', chapter: 1 },
          { day: 29, label: 'Revelation 1-11', book: 'Revelation', chapter: 1 },
          { day: 30, label: 'Revelation 12-22', book: 'Revelation', chapter: 12 }
        ]
      }
    ]
  }
};
