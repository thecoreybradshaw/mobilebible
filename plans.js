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
    title: "365-Day Chronological",
    description: "Read straight through Genesis to Revelation over the course of a year.",
    weeks: [
      {
        week: 1,
        title: "Week 1",
        days: [
          { day: 1, label: 'Genesis 1-3', book: 'Genesis', chapter: 1 },
          { day: 2, label: 'Genesis 4-7', book: 'Genesis', chapter: 4 },
          { day: 3, label: 'Genesis 8-11', book: 'Genesis', chapter: 8 },
          { day: 4, label: 'Genesis 12-15', book: 'Genesis', chapter: 12 },
          { day: 5, label: 'Genesis 16-19', book: 'Genesis', chapter: 16 },
          { day: 6, label: 'Genesis 20-22', book: 'Genesis', chapter: 20 },
          { day: 7, label: 'Genesis 23-24', book: 'Genesis', chapter: 23 }
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
    description: "A thoughtful pace through the New Testament in 6 months.",
    weeks: [
      {
        week: 1,
        title: "Week 1",
        days: [
          { day: 1, label: 'Matthew 1-4', book: 'Matthew', chapter: 1 },
          { day: 2, label: 'Matthew 5-8', book: 'Matthew', chapter: 5 }
        ]
      }
    ]
  },
  nt_moderate: {
    title: "New Testament Moderate (3-Month)",
    description: "A steady pace through the New Testament in 3 months.",
    weeks: [
      {
        week: 1,
        title: "Week 1",
        days: [
          { day: 1, label: 'Matthew 1-7', book: 'Matthew', chapter: 1 },
          { day: 2, label: 'Matthew 8-14', book: 'Matthew', chapter: 8 }
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
          { day: 6, label: 'Mark 9-16', book: 'Mark', chapter: 9 }
        ]
      }
    ]
  }
};
