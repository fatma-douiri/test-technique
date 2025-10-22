type IntentConfig ={
  'visible-if'?:Record<string,boolean|string>;
  [key: string]: unknown
}

type IntentsData = Record<string, IntentConfig>;

const intents :Record<string, IntentsData>= {
  "page-a": {
    "address-form": { "default": "16 RUE DE LA VILLE LEVEQUE 75008 PARIS" },
    "button": { "label": "Envoyer" }
  },

  "page-b": {
    "accept-cgu": {"label": "J’accepte les CGU"},
    "address-form": {
      "default": "16 RUE DE LA VILLE LEVEQUE 75008 PARIS",
      "visible-if": {"accept-cgu": true}
    },
    "button": {"label": "Envoyer"}
  }
};

export function fetchIntents(screenId: string) :Promise<IntentsData> {
  // Simulation d'un délais de réponse de la part du serveur entre 50ms et 1s
  return new Promise(resolve => {
    setTimeout(
      () => resolve(intents[screenId]),
        50 + Math.random() * 950
      )
  });
}
