import { Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { useEffect, useMemo } from "react";

import { useCelatoneApp, useMobile } from "lib/app-provider";
import { useLocalStorage } from "lib/hooks/useLocalStorage";
import { scrollToTop } from "lib/utils";

import Footer from "./Footer";
import Header from "./Header";
import MobileHeader from "./mobile/MobileHeader";
import Navbar from "./navbar";
import SubHeader from "./SubHeader";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const {
    chainConfig: { hasSubHeader },
  } = useCelatoneApp();
  const router = useRouter();
  const isMobile = useMobile();

  const [isExpand, setIsExpand] = useLocalStorage("navbar", !isMobile);
  const defaultRow = "70px 48px 1fr";
  const mode = useMemo(() => {
    if (isMobile)
      return {
        templateAreas: `"header""main"`,
        templateRows: "60px 1fr",
        templateCols: "1fr",
        header: <MobileHeader />,
        subHeader: undefined,
      };

    return {
      templateAreas: `"header header""subheader subheader""nav main"`,
      templateRows: defaultRow,
      templateCols: isExpand ? "250px 1fr" : "48px 1fr",
      header: <Header />,
      subHeader: <SubHeader />,
    };
  }, [isMobile, isExpand]);

  useEffect(() => {
    scrollToTop();
  }, [router.asPath]);

  return (
    <Grid
      templateAreas={mode.templateAreas}
      gridTemplateRows={mode.templateRows}
      gridTemplateColumns={mode.templateCols}
      h="100vh"
      overflowX="hidden"
      overflowY="scroll"
      bg="background.main"
    >
      <GridItem bg="gray.900" area="header" mb={1}>
        {mode.header}
      </GridItem>
      {!isMobile && (
        <>
          <GridItem
            bg={{ base: "background.main", md: "gray.900" }}
            area="subheader"
            mb="1"
            py={{ base: 2, md: 0 }}
            px={{ base: 4, md: 0 }}
          >
            {mode.subHeader}
          </GridItem>
          <GridItem
            bg={{ base: "background.main", md: "gray.900" }}
            area="nav"
            overflowY="auto"
          >
            <Navbar isExpand={isExpand} setIsExpand={setIsExpand} />
          </GridItem>
        </>
      )}
      <GridItem area="main" overflowX="hidden" id="content">
        <div
          style={{ minHeight: `calc(100vh - ${hasSubHeader ? 129 : 66}px)` }}
        >
          {children}
        </div>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
