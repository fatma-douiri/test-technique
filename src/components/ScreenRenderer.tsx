import { useParams } from 'react-router';
import AddressForm from "./AddressForm.tsx";
import AcceptCGU from "./AcceptCGU.tsx";
import Button from "./Button.tsx";


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

    return (
        <div className="p-4">

          {/* Exemple pour montrer les composants disponibles */}
          {/* Vous pouvez supprimer les lignes ci-après pour laisser place à votre implémentation */}
          {/* Vous pouvez également modifier les composants fournis pour qu'ils répondent à vos besoins */}
          <div>
            <p className="text-xl font-bold mb-2">Écran dynamique : {screenId}</p>

            <p>Showroom</p>
            <AddressForm default={"zzz"}/>
            <AcceptCGU label={'oui je suis ok'}/>
            <Button label={"un bouton"}/>
          </div>

            {/* Rendu dynamique des composants à insérer ici */}
            {/* */}
            {/* */}
            {/* */}
            {/* */}
            {/* */}
            {/* */}
            {/* */}
            {/* */}
            {/* */}




        </div>
    );
}
