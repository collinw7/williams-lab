var Info = {
  color: "#FFFFFF",
  height: 200,
  width: 200,
  script:
    "load ../assets/2ky8.pdb; cartoon only; select protein; color cyan; select dna; color group; reset; center {0.8304999999999989 -4.0215 28.8575}; rotate z -21.95; rotate y 136.43; rotate z -110.78; zoom 152.09;",
  use: "HTML5",
  j2sPath: "../jsmol/j2s"
};

Jmol.getApplet("2ky8", Info);
