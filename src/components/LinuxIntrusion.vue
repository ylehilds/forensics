<template>
  <!--<v-flex xs12 sm6 offset-sm3>-->
  <div>
    <h1>Linux Intrusion</h1>
    <v-flex>
      <v-card>
        <!--<v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">-->
        <!--</v-card-media>-->
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kali VMWare</h3>
            <!--<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>-->
            <!--<div>Name</div>-->
            <br />
            <div><span><b>Description:</b></span> <span>A very well known Forensics/Penetration Testing OS</span></div>
            <div><b>Personal review:</b> It is a great OS that has many tools to proceed with analysis.</div>
            <div><b>Personal notes on usage:</b> Download and open Kali using VMWare and check which tools can be used for windows intrusion analysis."</div>
            <div><b>Source URL:</b> <a href="https://www.offensive-security.com/kali-linux-vm-vmware-virtualbox-hyperv-image-download/" target="_blank">https://www.offensive-security.com/kali-linux-vm-vmware-virtualbox-hyperv-image-download/</a></div>
            <div><b>Local Source: </b> N/A</div>
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
            <h3 class="headline mb-0">tcpdstat</h3>
            <br />
            <div><span><b>Description:</b></span> <span>Great Network Protocol analyzer</span></div>
            <div><b>Personal review:</b> It is a great tool that provides statistics and a break down packet capture session data.to both capture and to analyse network packets.</div>
            <div><b>Personal notes on usage:</b> From terminal use the following command: tcpdstat &lt;NetworkFileCapture&gt;</div>
            <div><b>Source URL:</b> <a href="http://forensics.wikia.com/wiki/TCPdStat" target="_blank">http://forensics.wikia.com/wiki/TCPdStat</a></div>
            <div><b>Local Source: </b> N/A</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Snort</h3>
            <br />
            <div><span><b>Description: </b>Open Source Intrusion prevention system, also capable of real-time both traffic analysis and packet logging.</span> </div>
            <div><span><b>Personal review: </b>This is really useful as both IDS and IPS</span> </div>
            <div><span><b>Personal notes on usage: </b> From terminal use the following command: snort [flags] [FileToAnalyze]</span> </div>
            <div><b>Source URL:</b> <a href="https://www.snort.org/" target="_blank">https://www.snort.org/</a></div>
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
            <h3 class="headline mb-0">Tcpdump</h3>
            <br />
            <div><span><b>Description: </b>Powerful Command-Line packet analyzer.</span> </div>
            <div><span><b>Personal review: </b>This is really useful to capture/sniff network traffic.</span> </div>
            <div><span><b>Personal notes on usage: </b> From terminal use the following command: tcpdump [flags] [interface] -w [fileName]</span> </div>
            <div><b>Source URL:</b> <a href="http://www.tcpdump.org/" target="_blank">http://www.tcpdump.org/</a></div>
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
            <h3 class="headline mb-0">hd</h3>
            <br />
            <div><span><b>Description: </b>Hexdump filter utility to display specified files/standard input.</span> </div>
            <div><span><b>Personal review: </b>This is really useful for text conversion</span> </div>
            <div><span><b>Personal notes on usage: </b> From terminal use the following command: hd [flags/range]</span> </div>
            <div><b>Source URL:</b> <a href="https://linux.die.net/man/1/hexdump" target="_blank">https://linux.die.net/man/1/hexdump</a></div>
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
            <h3 class="headline mb-0">tcptrace</h3>
            <br />
            <div><span><b>Description: </b>Program for analysis of TCP dump files.</span> </div>
            <div><span><b>Personal review: </b>It shows network session data, statistics on the data it sees</span> </div>
            <div><span><b>Personal notes on usage: </b> From terminal use the following command: tcptrace [flags] [fileName]</span> </div>
            <div><b>Source URL:</b> <a href="http://www.tcptrace.org/" target="_blank">http://www.tcptrace.org/</a></div>
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
            <h3 class="headline mb-0">Wireshark</h3>
            <br />
            <div><span><b>Description:</b></span> <span>It is the most used Network Protocol analyzer</span></div>
            <div><b>Personal review:</b> It is a great GUI tool to both capture and to analyse network packets, it is the leader on network packet analysis.</div>
            <div><b>Personal notes on usage:</b> Open Wireshark, select the network adapter to observe, capture the network traffic, save to a file, you can add display filters as to target the packets of interest, for example "ip.addr == 192.0.2.1"</div>
            <div><b>Source URL:</b> <a href="https://www.wireshark.org/" target="_blank">https://www.wireshark.org/</a></div>
            <div><b>Local Source: </b> N/A</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'LinuxIntrusion',
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
