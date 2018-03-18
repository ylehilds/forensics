<template>
  <!--<v-flex xs12 sm6 offset-sm3>-->
  <div>
    <h1>Network Forensics</h1>
    <v-flex>
      <v-card>
        <!--<v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">-->
        <!--</v-card-media>-->
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Wireshark</h3>
            <!--<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>-->
            <!--<div>Name</div>-->
            <br />
            <div><span><b>Description:</b></span> <span>It is the most used Network Protocol analyzer</span></div>
            <div><b>Personal review:</b> It is a great GUI tool to both capture and to analyse network packets, it is the leader on network packet analysis.</div>
            <div><b>Personal notes on usage:</b> Open Wireshark, select the network adapter to observe, capture the network traffic, save to a file, you can add display filters as to target the packets of interest, for example "ip.addr == 192.0.2.1"</div>
            <div><b>Source URL:</b> <a href="https://www.wireshark.org/" target="_blank">https://www.wireshark.org/</a></div>
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
            <h3 class="headline mb-0">Microsoft Message Analyzer</h3>
            <br />
            <div><span><b>Description:</b></span> <span>Great Network Protocol analyzer</span></div>
            <div><b>Personal review:</b> It is a great GUI tool to both capture and to analyse network packets. I really liked it, right up there with Wireshark</div>
            <div><b>Personal notes on usage:</b> Open Message Analyzer, select the network adapter to observe, capture the network traffic, save to a file, you can add display filter expressions as to target the packets of interest and ports, for example "*address == 192.168.1.1 tcp.port == 80"</div>
            <div><b>Source URL:</b> <a href="https://www.microsoft.com/en-us/download/details.aspx?id=44226" target="_blank">https://www.microsoft.com/en-us/download/details.aspx?id=44226</a></div>
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
            <h3 class="headline mb-0">Ettercap</h3>
            <br />
            <div><span><b>Description: </b>comprehensive suite for man in the middle attacks. It features sniffing of live connections, content filtering on the fly and many other interesting tricks. It supports active and passive dissection of many protocols and includes many features for network and host analysis.</span> </div>
            <div><span><b>Personal review: </b>Good tool to analyze network packets</span> </div>
            <div><span><b>Personal notes on usage: </b> Open ettercap GUI > File > Open > (choose the network capture file) > Views > Connections then you can filter by ip address using the "host Filter" text area, or protocol filter or connection state filter.</span> </div>
            <div><b>Source URL:</b> <a href="http://www.ettercap-project.org/ettercap/" target="_blank">http://www.ettercap-project.org/ettercap/</a></div>
            <div><span><b>Local Source: </b> N/A</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'NetworkForensics',
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
