var Info = {
  color: "#FFFFFF",
  height: 200,
  width: 200,
  script:
    "load ../assets/2moe.pdb; cartoon only; select protein; color [235,205,87]; select dna; color group; reset; center {15.151499999999999 -1.4034999999999993 -24.366}; rotate z 118.79; rotate y 146.06; rotate z 21.32; translate y -12.5;",
  use: "HTML5",
  j2sPath: "../jsmol/j2s",
};

Jmol.getApplet("2moe", Info);
