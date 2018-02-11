<template>
  <!--<v-flex xs12 sm6 offset-sm3>-->
  <div>
    <h1>Linux Forensics</h1>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Netcat - NC</h3>
            <br />
            <div><span><b>Description: </b>Netcat for Linux</span> </div>
            <div><span><b>Personal review: </b>great netcat tool to transfer data accross networks</span> </div>
            <div><span><b>Personal notes on usage:</b>
            <pre>
            On the forensics machine do this command:

            nc -v -l -p &lt;Port&gt; > command.txt

            On the victim machine run this:

            Command | nc forensic_workstation_ip &lt;Port&gt;
            </pre>
            </span> </div>
            <div><span><b>Source URL: <a href="https://netsec.ws/?p=292">https://netsec.ws/?p=292</a> </b></span> </div>
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
            <h3 class="headline mb-0">MD5SUM</h3>
            <br />
            <div><span><b>Description: </b>Compute and Check MD5 message digest</span> </div>
            <div><span><b>Personal review: </b>Great tool to generate MD5 hashes</span> </div>
            <div><span><b>Personal notes on usage: </b> md5sum [Option] [File]</span> </div>
            <div><span><b>Source URL: </b> N/A</span> </div>
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
            <h3 class="headline mb-0">SHA256SUM</h3>
            <br />
            <div><span><b>Description: </b>Compute and Check SHA256 message digest</span> </div>
            <div><span><b>Personal review: </b>Great tool to generate SHA256 hashes</span> </div>
            <div><span><b>Personal notes on usage: </b> sha256sum [Option] [File]</span> </div>
            <div><span><b>Source URL: </b> N/A</span> </div>
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
            <h3 class="headline mb-0">gcore</h3>
            <br />
            <div><span><b>Description: </b>Generate a core file for a running process</span> </div>
            <div><span><b>Personal review: </b>Great tool to generate process memory dump</span> </div>
            <div><span><b>Personal notes on usage:</b>gcore -o [FileNameDump].dmp [PID]</span> </div>
            <div><span><b>Source URL: </b>N/A</span> </div>
            <div><span><b>Local Source: </b> included in OS</span> </div>
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
            <div><span><b>Personal notes on usage: </b> netstat -an | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <div><span><b>Personal notes on usage: </b>netstat -an | grep "LISTEN" |nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">Running Processes (Ps)</h3>
            <br />
            <div><span><b>Description: </b> Get Running Processes</span> </div>
            <div><span><b>Personal review: </b>Great tool to get Running Processes</span> </div>
            <div><span><b>Personal notes on usage: </b> Ps -aux | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">Running Services (initctl)</h3>
            <br />
            <div><span><b>Description: </b>Get Running Services</span> </div>
            <div><span><b>Personal review: </b>Great tool to get running services</span> </div>
            <div><span><b>Personal notes on usage: </b>initctl list | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">Executables Connected to Active Connections (Netstat)</h3>
            <br />
            <div><span><b>Description: </b>Get Executables Connected to Active Connections</span> </div>
            <div><span><b>Personal review: </b> Great tool to get Executables Connected to Active Connections</span> </div>
            <div><span><b>Personal notes on usage: </b> Netstat -tupn | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">Executables Connected to Listening ports (Netstat)</h3>
            <br />
            <div><span><b>Description: </b>Get Executables Connected to Listening ports</span> </div>
            <div><span><b>Personal review: </b>Great tool to get Executables Connected to Listening ports</span> </div>
            <div><span><b>Personal notes on usage: </b> Netstat -tulpn | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">Local open files and associated processes (Lsof)</h3>
            <br />
            <div><span><b>Description: </b> Get Local open files and associated processes</span> </div>
            <div><span><b>Personal review: </b> great tool to get local open files and associated processes</span> </div>
            <div><span><b>Personal notes on usage: </b>Lsof | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">Find the file systems mounted (df)</h3>
            <br />
            <div><span><b>Description: </b> Finding the file systems mounted</span> </div>
            <div><span><b>Personal review: </b> great tool to find current file systems mounted</span> </div>
            <div><span><b>Personal notes on usage: </b>df | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">Remote open files and associated processes (Lsof)</h3>
            <br />
            <div><span><b>Description: </b> Get Remote open files and associated processes</span> </div>
            <div><span><b>Personal review: </b> great tool to get remote open files and associated processes</span> </div>
            <div><span><b>Personal notes on usage: </b>Lsof -i | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">User logged on (w)</h3>
            <br />
            <div><span><b>Description: </b> Get User logged on</span> </div>
            <div><span><b>Personal review: </b> great tool to get current users logged in</span> </div>
            <div><span><b>Personal notes on usage: </b> w | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">Kernel Modules (Lsmod)</h3>
            <br />
            <div><span><b>Description: </b>Get Kernel Modules currently loaded</span> </div>
            <div><span><b>Personal review: </b>Great tool to get loaded kernel modules</span> </div>
            <div><span><b>Personal notes on usage: </b> lsmod | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">Scheduled Jobs (Crontab)</h3>
            <br />
            <div><span><b>Description: </b>Get Scheduled Jobs</span> </div>
            <div><span><b>Personal review: </b>Great tool to get scheduled jobs</span> </div>
            <div><span><b>Personal notes on usage: </b> crontab -l | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">System information (Uname)</h3>
            <br />
            <div><span><b>Description: </b>Get OS System information</span> </div>
            <div><span><b>Personal review: </b>Great tool to get System OS version Information</span> </div>
            <div><span><b>Personal notes on usage: </b>  uname -a | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">Computer Name (Hostname)</h3>
            <br />
            <div><span><b>Description: </b>Get Computer Name</span> </div>
            <div><span><b>Personal review: </b>Great tool to get Computer Name</span> </div>
            <div><span><b>Personal notes on usage: </b>  hostname | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">IP and MAC addresses (Ifconfig)</h3>
            <br />
            <div><span><b>Description: </b>Get IP and MAC addresses</span> </div>
            <div><span><b>Personal review: </b>Great tool to get IP and MAC addresses</span> </div>
            <div><span><b>Personal notes on usage: </b> ifconfig /all | nc &lt;ip_address&gt; &lt;port&gt;</span> </div>
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
            <h3 class="headline mb-0">System Date and Time</h3>
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
