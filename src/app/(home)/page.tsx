import * as React from "react";
import { Footer } from "../../components/layouts/footer";
import { Header } from "../../components/layouts/header";
import { Main } from "../../components/layouts/main";

export default function Page() {
  return (
    <Main>
      <Header />
      <Footer />
    </Main>
  );
}
