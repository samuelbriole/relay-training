import { Network, Environment, Store, RecordSource } from "relay-runtime";
import { server } from "./server";

export const createRelayEnvironment = () => {
  const network = Network.create(async (operation, variables) => {
    const response = (await server.query(
      operation.text!,
      variables
    )) as Promise<any>;
    console.log(response);
    return response;
  });
  return new Environment({
    network,
    store: new Store(new RecordSource())
  });
};

export const environment = createRelayEnvironment();
