var Info = {
  color: "#FFFFFF",
  height: 200,
  width: 200,
  script:
    "load ../assets/2l2l.pdb; cartoon only; select :a; color [120,120,235]; select :b; color cyan; reset; center {40.1495 18.933500000000002 4.483499999999999}; rotate z 151.83; rotate y 127.41; rotate z -91.02; zoom 124.46; translate x -10; translate y 10;",
  use: "HTML5",
  j2sPath: "../jsmol/j2s",
};

Jmol.getApplet("2l2l", Info);
