import { useParams } from 'react-router';
import AddressForm from "./AddressForm.tsx";
import AcceptCGU from "./AcceptCGU.tsx";
import Button from "./Button.tsx";
import { useEffect, useState, type ComponentType } from 'react';
import { fetchIntents } from '../mock/intents.ts';

//Types
type IntentName = "address-form" | "accept-cgu" | "button";
type IntentConfig = {
  'visible-if'?: Record<string, boolean | string>;
  [key: string]: any
};
type IntentsData = Record<string, IntentConfig>;

//Mapping
const COMPONENTS: Record<IntentName, ComponentType<any>> = {
  "address-form": AddressForm,
  "accept-cgu": AcceptCGU,
  "button": Button
};

export default function ScreenRenderer() {
  // récupération de l'identifiant de l'écran à partir de l'URL
  const { screenId } = useParams();
  // À RÉALISER :
      // Ici, vous devez :
      // 1. Simuler un appel à /intent/:screen_id (les données sont fournies dans /src/mock/intents.ts).
      // 2. En fonction du screen_id, sélectionner un des deux payloads (simple ou avec visible-if).
      // 3. Parcourir dynamiquement les intents reçus.
      // 4. Pour chaque intent, afficher le composant correspondant avec ses props.

      // 5. Bonus : Gérer les conditions d'affichage si l'intent possède un champ "visible-if".

  const [intents, setIntents] = useState<IntentsData | null>(null);
  const [componentStates, setComponentStates] = useState<Record<string, boolean | string>>({});

  useEffect(() => {
    if (!screenId) return;
    
    const loadIntents = async () => {
      try {
        const data = await fetchIntents(screenId);
        setIntents(data);
      } catch (error) {
        console.error("Erreur :" , error);
      }
    };

    loadIntents();
  }, [screenId]);

  const updateState = (intentName: string, value: boolean | string) => {
    setComponentStates(prev => ({
       ...prev, 
       [intentName]: value }));
  };

  const isVisible = (config: IntentConfig): boolean => {
    const condition = config['visible-if'];
    if (!condition) return true;

    const [key, expectedValue] = Object.entries(condition)[0];
     return componentStates[key] === expectedValue;
  };

  if (!intents) {
    return <div className="p-4 ">Chargement...</div>;
  }

  return (
    <div className="p-4 ">
      <p className="text-xl font-bold mb-2">Écran dynamique : {screenId}</p>

      {/* Rendu dynamique des composants */}
     {Object.entries(intents).map(([intentName, config]) => {
      if (!isVisible(config)) return null;

      const Component = COMPONENTS[intentName as IntentName];
      if (!Component) return null;

      const { _, ...rest } = config;

      const props = { ...rest };

      if (intentName === "accept-cgu" || intentName === "address-form") {
        
        props.onChange = (value: boolean | string) => updateState(intentName, value);
      }

     return <Component key={intentName} {...props}/>;
    })}

    </div>
  );
}