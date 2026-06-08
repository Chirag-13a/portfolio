import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ProfilePanel from "./ProfilePanel";
import ParticleBackground from "./ParticleBackground";

function Layout() {
  const location = useLocation();
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      setCursor({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      className="app"
      style={{
        "--cursor-x": `${cursor.x}%`,
        "--cursor-y": `${cursor.y}%`,
      }}
    >
      <div className="cursor-glow" aria-hidden="true" />
      <ParticleBackground />
      <div className="portfolio-shell">
        <ProfilePanel />
        <div className="content-shell">
          <div className="content-card">
            <div className="page-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
