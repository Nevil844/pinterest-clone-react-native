import * as SecureStore from "expo-secure-store";
import { NhostClient , NhostReactProvider} from "@nhost/react";


const nhost = new NhostClient({
    backendUrl: "https://jmdnmlfshhnrxqccrwra.nhost.run",
    clientStorageType: "expo-secure-storage",
    clientStorage: SecureStore,
   });

export default nhost;