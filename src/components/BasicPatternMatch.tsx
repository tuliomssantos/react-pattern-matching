import { useEffect, useState } from "react";

import { match } from "ts-pattern";

import { mock as mockPromise } from "../utils/mock-promise";

export default function BasicPatternMatch() {
  const [state, setState] = useState<
    | {
        type: "loading";
      }
    | {
        type: "error";
      }
    | {
        type: "success";
        data: { message: string };
      }
  >({
    type: "loading",
  });

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setState({ type: "loading" });
        const response = await mockPromise(true, 3000);
        const { data } = response;
        setState({ type: "success", data });
      } catch (error) {
        setState({ type: "error" });
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Basic Pattern Matching</h1>
      {match(state)
        .with({ type: "loading" }, () => <div>Loading...</div>)
        .with({ type: "error" }, () => <div>Error</div>)
        .with({ type: "success" }, ({ data }) => <div>{data.message}</div>)
        .exhaustive()}
        <hr />
    </div>
  );
}
