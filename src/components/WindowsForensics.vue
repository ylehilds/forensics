<template>
  <!--<v-flex xs12 sm6 offset-sm3>-->
  <div>
    <h1>Windows Forensics</h1>
    <v-flex>
      <v-card>
        <!--<v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">-->
        <!--</v-card-media>-->
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Ncat</h3>
            <!--<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>-->
            <!--<div>Name</div>-->
            <br />
            <div><span><b>Description: </b>Ncat is a feature-packed networking utility which reads and writes data across networks from the command line</span></div>
            <div><span><b>Personal review: </b>This is a great tool to send data accross networks</span></div>
            <div><span><b>Personal notes on usage: </b><br /><pre>
            On the forensics machine do this command:

            ncat -v -l -p &lt;Port&gt; > command.txt

            On the victim machine run this:

            Command | nc forensic_workstation_ip &lt;Port&gt;</pre>
            </span></div>
            <div><span><b>Source URL:  <a target="_blank" href="https://nmap.org/ncat">https://nmap.org/ncat</a></b></span></div>
            <div><span><b>Local Source: N/A</b></span></div>
          </div>
        </v-card-title>
        <!--<v-card-actions>-->
        <!--<v-btn flat color="orange">Share</v-btn>-->
        <!--<v-btn flat color="orange">Explore</v-btn>-->
        <!--</v-card-actions>-->
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Netcat</h3>
            <br />
            <div><span><b>Description: </b>Netcat for Windows</span> </div>
            <div><span><b>Personal review: </b>great netcat for windows when needed to be running on a Windows machine</span> </div>
            <div><span><b>Personal notes on usage:</b> same usage as regular netcat above:
            <pre>
            On the forensics machine do this command:

            nc -v -l -p &lt;Port&gt; > command.txt

            On the victim machine run this:

            Command | nc forensic_workstation_ip &lt;Port&gt;
            </pre>
            </span> </div>
            <div><span><b>Source URL: <a target="_blank" href="https://joncraton.org/blog/46/netcat-for-windows/">https://joncraton.org/blog/46/netcat-for-windows/</a> </b></span> </div>
            <div><span><b>Local Source: N/A</b></span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">PowerShell</h3>
            <br />
            <div><span><b>Description: </b>Windows powerful scripting tool</span> </div>
            <div><span><b>Personal review: </b>This was a really nice tool to generate hashes</span> </div>
            <div><span><b>Personal notes on usage: </b>get-filehash &lt;fileName&gt; -Algorithm &lt;type&gt; | &lt;fileThatWillHaveTheHash&gt;

            </span> </div>
            <div><span><b>Source URL: </b> N/A</span> </div>
            <div><span><b>Local Source: </b> Included in Windows OS</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">userdump</h3>
            <br />
            <div><span><b>Description: </b>Process memory tool, To get process memory dumps used userdump tool from Microsoft</span> </div>
            <div><span><b>Personal review: </b>Great tool to generate process memory dump</span> </div>
            <div><span><b>Personal notes on usage:</b>Userdump &lt;PID&gt; &lt;FileName&gt;.dmp</span> </div>
            <div><span><b>Source URL: <a target="_blank" href="https://www.microsoft.com/en-us/download/confirmation.aspx?id=4060">https://www.microsoft.com/en-us/download/confirmation.aspx?id=4060</a></b></span> </div>
            <div><span><b>Local Source: </b> N/A</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Current network connections (Netstat)</h3>
            <br />
            <div><span><b>Description: </b> Get Current network connections</span> </div>
            <div><span><b>Personal review: </b> Netstat is the tool to get network info</span> </div>
            <div><span><b>Personal notes on usage: </b> netstat -ano | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL:</b> N/A</span> </div>
            <div><span><b>Local Source: </b>Included in OS</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Open TCP and UDP ports (Listening) (Netstat)</h3>
            <br />
            <div><span><b>Description: </b> Get Open TCP and UDP ports (Listening)</span> </div>
            <div><span><b>Personal review: </b> Netstat is the tool to get network info</span> </div>
            <div><span><b>Personal notes on usage: </b>netstat -an | find "LISTENING" |nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b>N/A</span> </div>
            <div><span><b>Local Source: </b>Included in OS</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Internal Routing Table (Netstat)</h3>
            <br />
            <div><span><b>Description: </b>Get Internal Routing Table</span> </div>
            <div><span><b>Personal review: </b>great tool to get routing table</span> </div>
            <div><span><b>Personal notes on usage: </b>netstat -rn |nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b>N/A</span> </div>
            <div><span><b>Local Source: </b> Included in OS</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Running Processes (PsList)</h3>
            <br />
            <div><span><b>Description: </b> Get Running Processes</span> </div>
            <div><span><b>Personal review: </b>Great tool to get Running Processes</span> </div>
            <div><span><b>Personal notes on usage: </b> PsList | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b><a href="https://download.sysinternals.com/files/SysinternalsSuite.zip">https://download.sysinternals.com/files/SysinternalsSuite.zip</a></span> </div>
            <div><span><b>Local Source: </b> N/A</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Running Services (PsService)</h3>
            <br />
            <div><span><b>Description: </b>Get Running Services</span> </div>
            <div><span><b>Personal review: </b>Great tool to get running services</span> </div>
            <div><span><b>Personal notes on usage: </b>PsService | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b><a href="https://download.sysinternals.com/files/SysinternalsSuite.zip">https://download.sysinternals.com/files/SysinternalsSuite.zip</a></span> </div>
            <div><span><b>Local Source: </b> N/A</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Executables Connected to Active Connections (Fport)</h3>
            <br />
            <div><span><b>Description: </b>Get Executables Connected to Active Connections</span> </div>
            <div><span><b>Personal review: </b> Great tool to get Executables Connected to Active Connections</span> </div>
            <div><span><b>Personal notes on usage: </b> Fport | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b><a target="_blank" href="https://www.mcafee.com/sg/downloads/free-tools/fport.aspx">https://www.mcafee.com/sg/downloads/free-tools/fport.aspx</a></span> </div>
            <div><span><b>Local Source: </b>N/A</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Executables Connected to Listening ports (Netstat)</h3>
            <br />
            <div><span><b>Description: </b>Get Executables Connected to Listening ports</span> </div>
            <div><span><b>Personal review: </b>Great tool to get Executables Connected to Listening ports</span> </div>
            <div><span><b>Personal notes on usage: </b> netstat -abn | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b>N/A</span> </div>
            <div><span><b>Local Source: </b>Included in OS</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Local open files and associated processes (PsFile)</h3>
            <br />
            <div><span><b>Description: </b> Get Local open files and associated processes</span> </div>
            <div><span><b>Personal review: </b> great tool to get local open files and associated processes</span> </div>
            <div><span><b>Personal notes on usage: </b>PsFile | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b><a href="https://download.sysinternals.com/files/SysinternalsSuite.zip">https://download.sysinternals.com/files/SysinternalsSuite.zip</a></span> </div>
            <div><span><b>Local Source: </b>N/A</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Find the file systems mounted (Wmic)</h3>
            <br />
            <div><span><b>Description: </b> Finding the file systems mounted</span> </div>
            <div><span><b>Personal review: </b> great tool to find current file systems mounted</span> </div>
            <div><span><b>Personal notes on usage: </b>wmic logicaldisk get /all /format:list | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b>N/A</span> </div>
            <div><span><b>Local Source: </b>Included in OS</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Remote open files and associated processes (PsFile)</h3>
            <br />
            <div><span><b>Description: </b> Get Remote open files and associated processes</span> </div>
            <div><span><b>Personal review: </b> great tool to get remote open files and associated processes</span> </div>
            <div><span><b>Personal notes on usage: </b>PsFile | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b><a href="https://download.sysinternals.com/files/SysinternalsSuite.zip">https://download.sysinternals.com/files/SysinternalsSuite.zip</a></span> </div>
            <div><span><b>Local Source: </b>N/A</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">User logged on (PsLoggedOn)</h3>
            <br />
            <div><span><b>Description: </b> Get User logged on</span> </div>
            <div><span><b>Personal review: </b> great tool to get current users logged in</span> </div>
            <div><span><b>Personal notes on usage: </b>PsLoggedOn | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b><a href="https://download.sysinternals.com/files/SysinternalsSuite.zip">https://download.sysinternals.com/files/SysinternalsSuite.zip</a></span> </div>
            <div><span><b>Local Source: </b>N/A</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Scheduled Jobs (At)</h3>
            <br />
            <div><span><b>Description: </b>Get Scheduled Jobs</span> </div>
            <div><span><b>Personal review: </b>Great tool to get scheduled jobs</span> </div>
            <div><span><b>Personal notes on usage: </b> at | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b>N/A</span> </div>
            <div><span><b>Local Source: </b>Included in OS</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">System information (PsInfo)</h3>
            <br />
            <div><span><b>Description: </b>Get System information</span> </div>
            <div><span><b>Personal review: </b>Great tool to get System Information</span> </div>
            <div><span><b>Personal notes on usage: </b>  PsInfo | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b><a href="https://download.sysinternals.com/files/SysinternalsSuite.zip">https://download.sysinternals.com/files/SysinternalsSuite.zip</a></span> </div>
            <div><span><b>Local Source: </b>N/A</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">IP and MAC addresses (IpConfig)</h3>
            <br />
            <div><span><b>Description: </b>Get IP and MAC addresses</span> </div>
            <div><span><b>Personal review: </b>Great tool to get IP and MAC addresses</span> </div>
            <div><span><b>Personal notes on usage: </b> ipconfig /all | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b>N/A</span> </div>
            <div><span><b>Local Source: </b>Included in OS</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">System Date and Time (Date)</h3>
            <br />
            <div><span><b>Description: </b>Get System Date and Time</span> </div>
            <div><span><b>Personal review: </b>Great too to get System Date and Time</span> </div>
            <div><span><b>Personal notes on usage: </b>date | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
            <div><span><b>Source URL: </b>N/A</span> </div>
            <div><span><b>Local Source: </b>Included in OS</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'WindowsForensics',
  data () {
    return {
      // msg: 'Welcome to Packet Analysis view',
      // card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
