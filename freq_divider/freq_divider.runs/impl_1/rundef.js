//
// Vivado(TM)
// rundef.js: a Vivado-generated Runs Script for WSH 5.1/5.6
// Copyright 1986-2019 Xilinx, Inc. All Rights Reserved.
//

var WshShell = new ActiveXObject( "WScript.Shell" );
var ProcEnv = WshShell.Environment( "Process" );
var PathVal = ProcEnv("PATH");
if ( PathVal.length == 0 ) {
  PathVal = "C:/Users/USER/Xilinx/Vitis/2019.2/bin;C:/Users/USER/Xilinx/Vivado/2019.2/ids_lite/ISE/bin/nt64;C:/Users/USER/Xilinx/Vivado/2019.2/ids_lite/ISE/lib/nt64;C:/Users/USER/Xilinx/Vivado/2019.2/bin;";
} else {
  PathVal = "C:/Users/USER/Xilinx/Vitis/2019.2/bin;C:/Users/USER/Xilinx/Vivado/2019.2/ids_lite/ISE/bin/nt64;C:/Users/USER/Xilinx/Vivado/2019.2/ids_lite/ISE/lib/nt64;C:/Users/USER/Xilinx/Vivado/2019.2/bin;" + PathVal;
}

ProcEnv("PATH") = PathVal;

var RDScrFP = WScript.ScriptFullName;
var RDScrN = WScript.ScriptName;
var RDScrDir = RDScrFP.substr( 0, RDScrFP.length - RDScrN.length - 1 );
var ISEJScriptLib = RDScrDir + "/ISEWrap.js";
eval( EAInclude(ISEJScriptLib) );


// pre-commands:
ISETouchFile( "write_bitstream", "begin" );
ISEStep( "vivado",
         "-log freq_divider.vdi -applog -m64 -product Vivado -messageDb vivado.pb -mode batch -source freq_divider.tcl -notrace" );





function EAInclude( EAInclFilename ) {
  var EAFso = new ActiveXObject( "Scripting.FileSystemObject" );
  var EAInclFile = EAFso.OpenTextFile( EAInclFilename );
  var EAIFContents = EAInclFile.ReadAll();
  EAInclFile.Close();
  return EAIFContents;
}
