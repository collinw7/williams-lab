var Info = {
  color: "#FFFFFF",
  height: 200,
  width: 200,
  script:
    "load ../assets/2mb7.pdb; cartoon only; color [120,120,235]; reset; center {-3.5945 3.353999999999999 2.6769999999999996}; rotate z -55.14; rotate y 89.11; rotate z -109.33;",
  use: "HTML5",
  j2sPath: "../jsmol/j2s",
};

Jmol.getApplet("2mb7", Info);
