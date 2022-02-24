import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

const data = {
  footer: {
    subtitle: "Redattrice, traduttrice e correttrice bozze",
    description: "Redattrice e traduttrice meneghina, Beatrice Toscano attualmente lavora al nuovo progetto della casa editrice Feltrinelli – IBS.it per la promozione di un social network dedicato alle novità editoriali. Grazie alla sua forte motivazione e la sua etica lavorativa, si è distinta conseguendo ottimi risultati in ambito universitario e scolastico.",
  }, 
  home: {
    subtitle: "Redattrice, traduttrice e correttrice bozze",
    description: "Laureata magistrale in <i>Editoria, Comunicazione e Moda</i> con <b>Master di II livello</b>, solide competenze di <b>redazione</b> e <b>traduzione</b>. Seguo con interesse il mondo <b>social</b>, in particolare Instagram, Tik Tok e Youtube.",
    sectionTitle: "Competenze",
    // secondDescription: "Lorem <a  href='www.google.it'> link</a> <b> dolor sit amet </b>, <strong> consectetur  </strong> adipiscing  <u>elit</u>. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus, eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit ligula, vel semper est dolor a nulla. Donec eu blandit metus. Maecenas eu justo accumsan, lobortis tortor non, lacinia ex. Nunc euismod mi nunc, ut vehicula lorem fermentum a.",
    secondDescription: `
    Lorem <a  href='https://www.google.it'> link</a> <b> dolor sit amet </b>, <strong> consectetur  </strong> adipiscing  <u>elit</u>. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus, eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit ligula, vel semper est dolor a nulla. Donec eu blandit metus. Maecenas eu justo accumsan, lobortis tortor non, lacinia ex. Nunc euismod mi nunc, ut vehicula lorem fermentum a.
    `,
    quote: "Scrivi senza paura. Edita senza pietà.",
    thirdDescription: 
    `
    <ul>
    <li>Ottima capacità di <b>SEO writing</b> </li>
    <li>Dimestichezza nell’utilizzo di <b>CMS</b> come <b>Wordpress</b></li>
    <li>Buona padronanza di <b>Adobe Photoshop</b> e <b>Premiere Pro</b></li>
    <li>Conoscenza base di <b>InDesign</b>, <b>Illustrator</b>, <b>HTML/CSS</b></li>
    <li>Padronanza del pacchetto <b>Microsoft Office</b></li> 
    </ul>
    <p>
    <b>Italiano</b>: Madrelingua
    <br>
    <b>Inglese</b> scritto e parlato: Ottimo
    <br>
    <b>Spagnolo</b> scritto e parlato: Discreto
    </p>
    `
    ,
    img: "BeatriceToscano.png",
    imgLinks: [
      {
        index: 0,
        img: "lafeltrinelli.png",
        altText: "some alt text",
        link: "https://maremosso.lafeltrinelli.it/"
      },
      {
        index: 1,
        img: "illeoneverde.png",
        altText: "some alt text",
        link: "https://www.leoneverde.it/"
      },
      {
        index: 2,
        img: "wecontent.png",
        altText: "some alt text",
        link: "https://www.wecontent.com/"
      },
      {
        index: 3,
        img: "dispari.png",
        altText: "some alt text",
        link: "https://www.studiodispari.com/"
      },
      {
        index: 4,
        img: "cives.png",
        altText: "some alt text",
        link: "https://video.unimi.it/"
      },
      {
        index: 5,
        img: "iqm.png",
        altText: "some alt text",
        link: "https://www.iqmselezione.it/"
      },
    ]

  },
  socials: [
    {
      index: 0,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/beatrice-toscano/",
      iconName: faLinkedinIn
    },
    {
      index: 1,
      name: "Messenger",
      link: "#TODO",
      iconName: faFacebookMessenger
    },
    {
      index: 2,
      name: "Email",
      link: "mailto:btoscano95@gmail.com",
      iconName: faEnvelope
    }

  ],
  contact: {
    title: "Contattami",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus, eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit ligula, vel semper est dolor a nulla. Donec eu blandit metus. Maecenas eu justo accumsan, lobortis tortor non, lacinia ex. Nunc euismod mi nunc, ut vehicula lorem fermentum a.",
    mail: "btoscano95@gmail.com",
    formTitle:"Contattami",
    img: "BeatriceToscano.png",
    altText: "Beatrice Toscano smiling"
  },    
  errorPage: {
    title: "404",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus, eget eleifend ex tempus in.",
    backToHomepageText: "Back to home page"
  },  
  testimonials: {
    title: "Dicono di me",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. ",
    list: [
      {
        index: 0,
        person: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. ",
      },     
      {
        index: 1,
        person: "Lorem ipsum dolor sit amet2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. ",
      },      
      {
        index: 2,
        person: "Lorem ipsum dolor sit amet3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. ",
      },
    ]
  },
  projects: {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus, eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit ligula, vel semper est dolor a nulla. Donec eu blandit metus.",
    list: [
      {
        index: 0,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus, eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit ligula, vel semper est dolor a nulla. Donec eu blandit metus. Maecenas eu justo accumsan, lobortis tortor non, lacinia ex. Nunc euismod mi nunc, ut vehicula lorem fermentum a.",
        img: "img_6.jpeg"
      },     
      {
        index: 1,
        title: "Lorem ipsum dolor sit amet2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus, eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit ligula, vel semper est dolor a nulla. Donec eu blandit metus. Maecenas eu justo accumsan, lobortis tortor non, lacinia ex. Nunc euismod mi nunc, ut vehicula lorem fermentum a.",
        img: "img_2.jpeg"
      },      
      {
        index: 2,
        title: "Lorem ipsum dolor sit amet3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus, eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit ligula, vel semper est dolor a nulla. Donec eu blandit metus. Maecenas eu justo accumsan, lobortis tortor non, lacinia ex. Nunc euismod mi nunc, ut vehicula lorem fermentum a.",
        img: "img_3.jpeg"
      },
    ]
  },
  about: {
      paragrafo: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus,    eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit ligula, vel semper est dolor a nulla. Donec eu blandit metus.  Maecenas eu justo accumsan, lobortis tortor non, lacinia ex. Nunc  euismod mi nunc, ut vehicula lorem fermentum a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus,    eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit ligula, vel semper est dolor a nulla. Donec eu blandit metus.  Maecenas eu justo accumsan, lobortis tortor non, lacinia ex. Nunc  euismod mi nunc, ut vehicula lorem fermentum a.",
      img: "BeatriceToscano2.png",
      altText: "Beatrice Toscano holding her thesis",
      img1: "img_6.jpeg",
      img2: "img_2.jpeg",
      img3: "img_3.jpeg"
  },
  acknowledgements: [
    {
      index: 0,
      job: "Vincitrice della XII edizione del Certamen Latinum",
      joblink: "https://www.google.it",
      employer: "Ortezzano (FM) - Certamen in onore del professor Giuseppe Carboni",
      date: "14 marzo 2014"
    },
    {
      index: 1,
      job: "Relatrice",
      joblink: "https://www.google.it",
      employer: "Cives Universi - Centro Internazionale di Cultura",
      date: "27 novembre 2018",
      description: "Intervento alla conferenza “F.Scott Fitzgerald - La presenza in Europa dello scrittore statunitense” organizzata da Cives Universi - Centro Internazionale di Cultura con un intervento dal titolo “Il soggiorno europeo e le radici della crisi personale e coniugale dei Fitzgerald”"
    }  
  ],
  education: [
    {
      index: 0,
      job: "Diploma di maturità classica",
      joblink: "https://www.google.it",
      employer: "Liceo Classico Cesare Beccaria di Milano",
      date: "settembre 2009 - giugno 2014",
      grade: "100/100"
    },    
    {
      index: 1,
      job: "Laurea triennale in Scienze Umanistiche per la Comunicazione",
      joblink: "https://www.google.it",
      employer: "Università degli Studi di Milano",
      date: "settembre 2014 - dicembre 2017",
      description: "Tesi in letteratura anglo-americana dal titolo “La corrispondenza di una crisi – Scott e Zelda Fitzgerald (1930-1938)”",
      grade: "110/110 con lode"
    },    
    {
      index: 2,
      job: "Laurea magistrale in Editoria, Comunicazione e Moda: curriculum Editoria",
      joblink: "https://www.google.it",
      employer: "Università degli Studi di Milano",
      date: "settembre 2017 - marzo 2020",
      description: "Tesi in traduzione inglese dal titolo “Metalupi, unicorni e Primi Cavalieri - un’analisi della traduzione italiana di A Game of Thrones di George R.R. Martin”",
      grade: "110/110 con lode"
    },    
    {
      index: 3,
      job: "Master di II livello Professione Editoria Cartacea e Digitale",
      joblink: "https://www.google.it",
      employer: "Università Cattolica di Milano",
      date: "gennaio 2020 - giugno 2020",
      description: "Corsi rilevanti:",
      list: [
        { index: 0, task: "Editing" },
        { index: 1, task: "Correzione bozze" },
        { index: 2, task: "Scrittura redazionale e creativa" },
        { index: 3, task: "Marketing e comunicazione" },
        { index: 4, task: "Traduzione" },
        { index: 5, task: "Ufficio stampa" },
        { index: 6, task: "Social media" },
        { index: 7, task: "Impaginazione" }
      ]
    }
   ],
  experience: [
    {
      index: 0,
      job: "Segretaria di Redazione e Assistente di Produzione",
      joblink: "https://www.google.it",
      employer: "C.T.U. - Centro di Servizio per le Tecnologie e la Didattica Universitaria Multimediale e a Distanza",
      date: "ottobre 2016 - febbraio 2017",
      list: [
        { index: 0, task: "Mansioni di segreteria e assistenza alla pre e post-produzione video" }
      ]
    },
    {
        index: 1,
        job: "Communication Assistant",
        joblink: "https://www.google.it",
        employer: "Studio del regista Fabio Martina",
        date: "gennaio 2017 - marzo 2017",
        list: [
          { index: 0, task: "Attività di comunicazione e assistenza" }
        ]
      },
      {
        index: 2,
        job: "Junior Editor",
        joblink: "https://www.google.it",
        employer: "Biblioteca Sormani di Milano",
        date: "settembre 2018 - febbraio 2019",
        list: [
          { index: 0, task: "Revisione di testi letterari in vista della loro pubblicazione in e-book" }
        ]
      },   
      {
        index: 3,
        job: "Content Editor",
        joblink: "https://www.google.it",
        employer: "WeContent - agenzia di content marketing e digital strateging",
        date: "ottobre 2018 - febbraio 2019",
        list: [
          { index: 0, task: "Redazione articoli" },
          { index: 1, task: "SEO writing" },
          { index: 2, task: "Stesura piani editoriali" },
          { index: 3, task: "Revisione contenuti" }
        ]
      },          
      {
        index: 4,
        job: "Junior Editor e Correttrice Bozze",
        joblink: "https://www.google.it",
        employer: "Il Leone Verde - casa editrice",
        date: "settembre 2020 - dicembre 2020",
        list: [
          { index: 0, task: "Redazione" },
          { index: 1, task: "Correzione bozze" },
          { index: 2, task: "Traduzione" },
          { index: 3, task: "Impaginazione" },
          { index: 4, task: "Controllo metadati" },
          { index: 5, task: "Aggiornamento delle anagrafiche dei libri" },
          { index: 6, task: "Segreteria e logistica" }
        ]
      },      
      {
        index: 5,
        job: "Traduttrice e Correttrice Bozze",
        joblink: "https://www.google.it",
        employer: "Il Leone Verde - casa editrice",
        date: "gennaio 2021 - marzo 2021",
        list: [
          { index: 0, task: "Traduzione dall’inglese del libro 'The Montessori Baby' di Simone Davies e Junnifa Uzodike" },
          { index: 1, task: "Correzione bozze del libro 'I sapori del giovane Goethe' di Laura Melara-Dürbeck" }
        ]
      },      
      {
        index: 6,
        job: "Redattrice",
        joblink: "https://www.google.it",
        employer: "laFeltrinelli - IBS.it",
        date: "giugno 2021 - oggi",
        list: [
          { index: 0, task: "Creazione contenuti per il sito web, redazione di articoli" },
          { index: 1, task: "Correzione bozze" },
          { index: 2, task: "Gestione CMS" },
          { index: 3, task: "Gestione delle partnership e delle relazioni con gli uffici stampa" },
          { index: 4, task: "Organizzazione di interviste agli autori" }
        ]
      }
  ]
};

export default data;
