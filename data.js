// Data
const words = [
    {
      word: "идти",
      translation: "gehen",
      synonyms: [
        { ru: "бежать", de: "rennen" },
        { ru: "шагать", de: "schreiten" },
        { ru: "плестись", de: "schlendern" },
        { ru: "гулять", de: "spazieren" },
        { ru: "торопиться", de: "sausen"},
        { ru: "бродить", de: "bummeln"},
        { ru: "передвигаться", de: "sich bewegen" },
      ]
    },
    {
      word: "видеть",
      translation: "sehen",
      synonyms: [
        { ru: "смотреть", de: "gucken" },
        { ru: "наблюдать", de: "beobachten" },
        { ru: "разглядывать", de: "anschauen" },
        { ru: "выглядывать", de: "schauen" },
        { ru: "замечать", de: "bemerken" },
        { ru: "рассматривать", de: "betrachten" },
        { ru: "взглянуть", de: "blicken" },
      ]
    },
    {
      word: "говорить",
      translation: "sprechen",
      synonyms: [
        { ru: "рассказывать", de: "erzählen" },
        { ru: "объяснять", de: "erklären" },
        { ru: "беседовать", de: "sich unterhalten" },
        { ru: "шептать", de: "flüstern" },
        { ru: "кричать", de: "rufen" },
        { ru: "бормотать", de: "murmeln" },
        { ru: "шептать", de: "wispern" },
        { ru: "протестовать", de: "protestieren" },
        { ru: "спорить", de: "diskutieren" },
        { ru: "утверждать", de: "behaupten" },
      ]
    },
    {
      word: "думать",
      translation: "denken",
      synonyms: [
        { ru: "размышлять", de: "nachdenken" },
        { ru: "обдумывать", de: "überlegen" },
        { ru: "вспоминать", de: "sich erinnern" },
        { ru: "предполагать", de: "vermuten" },
        { ru: "воображать", de: "sich vorstellen" },
        { ru: "считать", de: "meinen" },
        { ru: "сомневаться", de: "zweifeln" },
        { ru: "оценивать", de: "einschätzen" },

      ]
    },
    {
      word: "радость",
      translation: "Freude",
      synonyms: [
        { ru: "счастье", de: "Glück" },
        { ru: "восторг", de: "Begeisterung" },
        { ru: "удовольствие", de: "Genuss" },
        { ru: "ликование", de: "Jubel" },
        { ru: "удовлетворение", de: "Zufriedenheit" },
        { ru: "Моё сердце подпрыгнуло от радости", de: "Mir hüpfte das Herz vor Freude" },
        { ru: "Я не мог поверить своей удаче", de: "Ich konnte mein Glück kaum fassen" },
        { ru: "Я подпрыгнул от радости", de: "Ich sprang vor Freude in die Luft" },
        { ru: "Я был в восторге", de: "Ich war begeistert" },
        { ru: "Меня охватило чувство удовлетворения", de: "Ich fühlte mich zufrieden" },
        { ru: "Мне казалось, что я плыву по облакам", de: "Ich fühlte mich, als ob ich auf Wolken schwebte" },
        { ru: "Я сиял от уха до уха", de: "Ich strahlte über das ganze Gesicht" },
      ]
    },
    {
      word: "страх",
      translation: "Angst",
      synonyms: [
        { ru: "тревога", de: "Sorge" },
        { ru: "паника", de: "Panik" },
        { ru: "неуверенность", de: "Unsicherheit" },
        { ru: "Мои зубы стучали от волнения", de: "vor Aufregung klapperten meine Zähne" },
        { ru: "ужас", de: "Schrecken" },
        { ru: "паника распространяется", de: "Panik machte sich breit" },
        { ru: "мое сердце билось как сумасшедшее", de: "mein Herz schlug wie verrückt"},
        { ru: "мне стало не по себе", de: "mir wurde unwohl" },
        { ru: "мой пульс участился", de: "mein Puls raste" },
        { ru: "мои руки дрожали", de: "meine Hände zitterten" },
        { ru: "Я не мог ясно мыслить", de: "ich war unfähig, einen klaren Gedanken zu fassen" },
      ]
    },
    {
      word: "ярость",
      translation: "Wut",
      synonyms: [
        { ru: "Я почувствовал, как мое сердце колотится от гнева", de: "Ich spürte, wie mein Herz vor Zorn raste" },
        { ru: "Горячее чувство пронзило мое тело.", de: "Ein heißes Gefühl schoss durch meinen Körper." },
        { ru: "Я чувствовал, что сейчас взорвусь.", de: "Ich hatte das Gefühl, gleich zu explodieren." },
        { ru: "Я почувствовал, как пульс бьется в висках.", de: "Ich empfand, wie mein Puls in meinen Schläfen hämmerte." },
        { ru: "Мои глаза сверкнули гневом.", de: "Meine Augen funkelten vor Zorn." }
      ]
    },
    {
        word: "печаль",
        translation: "Trauer",
        synonyms: [
          { ru: "Быть полностью подавленным", de: "Völlig niedergeschlagen sein" },
          { ru: "грустить до смерти", de: "zu Tode betrübt sein" },
          { ru: "найти все бессмысленным", de: "alles sinnlos finden" },
          { ru: "ощущение огромной пустоты внутри себя", de: "eine große Leere in sich fühlen" },
          { ru: "видеть все только черным", de: "alles nur noch schwarz sehen" }
        ]
      },
    {
      word: "любить",
      translation: "lieben",
      synonyms: [
        { ru: "нравиться", de: "mögen" },
        { ru: "ценить", de: "schätzen" },
        { ru: "наслаждаться", de: "genießen" },
        { ru: "уважать", de: "respektieren" }
      ]
    },
    {
      word: "хотеть",
      translation: "wollen",
      synonyms: [
        { ru: "желать", de: "sich wünschen" },
        { ru: "мечтать", de: "träumen von" },
        { ru: "нуждаться", de: "brauchen etwas" },
        { ru: "стремиться", de: "streben nach" },
        { ru: "надеяться", de: "hoffen auf" }
      ]
    },
    {
      word: "неожиданность",
      translation: "Überraschung",
      synonyms: [
        { ru: "удивляться", de: "erstaunt sein" },
        { ru: "быть сбитым с толку", de: "durcheinander sein" },
        { ru: "быть огорошенным", de: "aus allen Wolken fallen" },
        { ru: "остолбенеть", de: "baff sein" },

      ]
    },
    {
      word: "бежать",
      translation: "rennen",
      synonyms: [
        { ru: "мчаться", de: "rasen" },
        { ru: "спешить", de: "eilen" },
        { ru: "торопиться", de: "sich beeilen" },
        { ru: "убегать", de: "weglaufen" },
        { ru: "нестись", de: "flitzen" }
      ]
    },
    {
      word: "нервозность",
      translation: "Nervosität",
      synonyms: [
        { ru: "волнение", de: "Aufregung" },
        { ru: "Мои ноги подкосились от нервозности", de: "Meine Beine wackelten vor Nervosität" },
        { ru: "Мое дыхание ускорилось", de: "Mein Atem ging schneller" },
      ]
    },
    {
        word: "надежда",
        translation: "Hoffnung",
        synonyms: [
          { ru: "Мое сердце наполнилось надеждой", de: "Mein Herz erfüllte sich mit Hoffnung" },
          { ru: "Я снова мог дышать.", de: "Ich konnte wieder aufatmen." },
          { ru: "Медленно тьма в моем сердце начала рассеиваться.", de: "Langsam begann sich die Dunkelheit in meinem Herzen zu lichten" },
          { ru: "Я чувствую новую уверенность", de: "Ich spüre neue Zuversicht" },
        ]
    },
    {
        word: "стыдиться",
        translation: "sich schämen",
        synonyms: [
          { ru: "хотелось бы исчезнуть под землей", de: "am liebsten im Boden verschwinden wollen" },
          { ru: "стыдиться", de: "beschämt sein" },
          { ru: "испытывать раскаяние", de: "Gewissensbisse haben" },
          { ru: "смущаться", de: "blamiert sein" },
        ]
    },
    {
      word: "спрашивать",
      translation: "fragen",
      synonyms: [
        { ru: "узнавать", de: "nachfragen" },
        { ru: "поинтересоваться", de: "sich erkundigen" },
        { ru: "обращаться", de: "sich wenden" },
        { ru: "запрашивать", de: "anfragen" },
        { ru: "требовать", de: "fordern" }
      ]
    },
      {
        word: "отчаяние",
        translation: "Verzweiflung",
        synonyms: [
          { ru: "Я больше не видел выхода", de: "Ich sah keinen Ausweg mehr" },
          { ru: "Я был близок к слезам", de: "Ich war den Tränen nahe" },
          { ru: "Я почувствовал комок в горле", de: "Ich fühlte einen Kloß im Hals" },
          { ru: "Мои колени стали слабыми", de: "Meine Knie wurden weich" },
          { ru: "у меня потемнело перед глазами", de: "Mir wurde schwarz vor Augen" }
        ]
      },
      {
        word: "разочарование",
        translation: "Enttäuschung",
        synonyms: [
          { ru: "потерять почву под ногами", de: "den Boden unter den Füßen verlieren" },
          { ru: "быть разочарованным", de: "frustriert sein" },
          { ru: "быть отчаянно несчастным", de: "todunglücklich sein" },
          { ru: "повесить голову", de: "den Kopf hängen lassen" },
        ]
    },
    {
      word: "отвечать",
      translation: "antworten",
      synonyms: [
        { ru: "реагировать", de: "reagieren" },
        { ru: "комментировать", de: "kommentieren" },
        { ru: "возражать", de: "entgegnen" },
        { ru: "разъяснять", de: "erläutern" },
        { ru: "подтверждать", de: "bestätigen" }
      ]
    }
  ];
  