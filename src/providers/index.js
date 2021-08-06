import { CasamentoProvider } from "./casamento";
import { ConfratProvider } from "./confraternizacao";
import { FormaturaProvider } from "./formatura/inde";
import { ProductsProvider } from "./products/inde";

const Providers = ({ children }) => {
  return (
    <CasamentoProvider>
      <ConfratProvider>
        <FormaturaProvider>
          <ProductsProvider>{children}</ProductsProvider>
        </FormaturaProvider>
      </ConfratProvider>
    </CasamentoProvider>
  );
};
export default Providers;
