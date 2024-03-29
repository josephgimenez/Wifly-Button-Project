<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>src/jquery.color.js at master from nakajima/jquery-glow - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    <link href="https://d3nwyuy0nl342s.cloudfront.net/03e0cc990197b724f58a8fc08dfce2b55e2ebe6c/stylesheets/bundle_common.css" media="screen" rel="stylesheet" type="text/css" />
<link href="https://d3nwyuy0nl342s.cloudfront.net/03e0cc990197b724f58a8fc08dfce2b55e2ebe6c/stylesheets/bundle_github.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script type="text/javascript">
      if (typeof console == "undefined" || typeof console.log == "undefined")
        console = { log: function() {} }
    </script>
    <script type="text/javascript" charset="utf-8">
      var GitHub = {
        assetHost: 'https://d3nwyuy0nl342s.cloudfront.net'
      }
      var github_user = null
      
    </script>
    <script src="https://d3nwyuy0nl342s.cloudfront.net/03e0cc990197b724f58a8fc08dfce2b55e2ebe6c/javascripts/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
    <script src="https://d3nwyuy0nl342s.cloudfront.net/03e0cc990197b724f58a8fc08dfce2b55e2ebe6c/javascripts/bundle_common.js" type="text/javascript"></script>
<script src="https://d3nwyuy0nl342s.cloudfront.net/03e0cc990197b724f58a8fc08dfce2b55e2ebe6c/javascripts/bundle_github.js" type="text/javascript"></script>


    
    <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "nakajima/jquery-glow"
      })
    </script>

    
  <link href="https://github.com/nakajima/jquery-glow/commits/master.atom" rel="alternate" title="Recent Commits to jquery-glow:master" type="application/atom+xml" />

        <meta name="description" content="Make your elements glow. Ooooh." />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "nakajima/jquery-glow";
      GitHub.currentRef = 'master';
      GitHub.commitSHA = "8bdcc11a415fceff02bb861b0a54fff19a7cc99e";
      GitHub.currentPath = 'src/jquery.color.js';
      GitHub.masterBranch = "master";

      
    </script>
  

        <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_setDomainName', 'none']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

    
  </head>

  

  <body class="logged_out page-blob">
    

    

    

    

    

    <div class="subnavd" id="main">
      <div id="header" class="true">
        
          <a class="logo boring" href="https://github.com">
            <img alt="github" class="default" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/header/logov3.png" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/header/logov3-hover.png" />
            <!--<![endif]-->
          </a>
        
        
        <div class="topsearch">
  
    <ul class="nav logged_out">
      <li class="pricing"><a href="/plans">Pricing and Signup</a></li>
      <li class="explore"><a href="/explore">Explore GitHub</a></li>
      <li class="features"><a href="/features">Features</a></li>
      <li class="blog"><a href="/blog">Blog</a></li>
      <li class="login"><a href="/login?return_to=https://github.com/nakajima/jquery-glow/blob/master/src/jquery.color.js">Login</a></li>
    </ul>
  
</div>

      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public    instapaper_ignore readability-menu">

      

      <div class="title-actions-bar">
        <h1>
          <a href="/nakajima">nakajima</a> / <strong><a href="https://github.com/nakajima/jquery-glow">jquery-glow</a></strong>
          
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="https://github.com/nakajima/jquery-glow/admin" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/nakajima/jquery-glow/toggle_watch" class="minibutton btn-watch " id="watch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', 'c325ff6347e5e515ea96deb2230e0d8cc7e7f179'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/nakajima/jquery-glow/toggle_watch" class="minibutton btn-watch " id="unwatch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', 'c325ff6347e5e515ea96deb2230e0d8cc7e7f179'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked" style="display:none"><a href="/nakajima/jquery-glow/fork" class="minibutton btn-fork " id="fork_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', 'c325ff6347e5e515ea96deb2230e0d8cc7e7f179'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>
            <li class="for-hasfork" style="display:none"><a href="#" class="minibutton btn-fork " id="your_fork_button"><span><span class="icon"></span>Your Fork</span></a></li>
          

          
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/nakajima/jquery-glow/watchers" title="Watchers" class="tooltipped downwards">103</a></li>
          <li class="forks"><a href="/nakajima/jquery-glow/network" title="Forks" class="tooltipped downwards">4</a></li>
        </ul>
      </li>
    </ul>

      </div>

        
  <ul class="tabs">
    <li><a href="https://github.com/nakajima/jquery-glow" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="https://github.com/nakajima/jquery-glow/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/nakajima/jquery-glow/network" highlight="repo_network">Network</a></li>
    <li><a href="/nakajima/jquery-glow/pulls" highlight="repo_pulls">Pull Requests (0)</a></li>

    

    
      
      <li><a href="/nakajima/jquery-glow/issues" highlight="issues">Issues (1)</a></li>
    

            
    <li><a href="/nakajima/jquery-glow/graphs" highlight="repo_graphs">Graphs</a></li>

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>master</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      <a href="#" class="dropdown">Switch Branches (2)</a>
      <ul>
        
          
          
            <li><a href="/nakajima/jquery-glow/blob/gh-pages/src/jquery.color.js" action="show">gh-pages</a></li>
          
        
          
            <li><strong>master &#x2713;</strong></li>
            
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown defunct">Switch Tags (0)</a>
      
    </li>
    <li>
    
    <a href="/nakajima/jquery-glow/branches" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  
  



        
    <div class="frame frame-center tree-finder" style="display: none">
      <div class="breadcrumb">
        <b><a href="/nakajima/jquery-glow">jquery-glow</a></b> /
        <input class="tree-finder-input" type="text" name="query" autocomplete="off" spellcheck="false">
      </div>

      
        <div class="octotip">
          <p>
            <a href="/nakajima/jquery-glow/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever">Dismiss</a>
            <strong>Octotip:</strong> You've activated the <em>file finder</em> by pressing <span class="kbd">t</span>
            Start typing to filter the file list. Use <span class="kbd badmono">↑</span> and <span class="kbd badmono">↓</span> to navigate,
            <span class="kbd">enter</span> to view files.
          </p>
        </div>
      

      <table class="tree-browser" cellpadding="0" cellspacing="0">
        <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
        <tr class="js-no-results no-results" style="display: none">
          <th colspan="2">No matching files</th>
        </tr>
        <tbody class="js-results-list">
        </tbody>
      </table>
    </div>

    <div id="jump-to-line" style="display:none">
      <h2>Jump to Line</h2>
      <form>
        <input class="textfield" type="text">
        <div class="full-button">
          <button type="submit" class="classy">
            <span>Go</span>
          </button>
        </div>
      </form>
    </div>

    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

        <a href="/nakajima/jquery-glow/downloads" class="download-source" id="download_button" title="Download source, tagged packages and binaries."><span class="icon"></span>Downloads</a>

      <div id="repository_desc_wrapper">
      <div id="repository_description" rel="repository_description_edit">
        
          <p>Make your elements glow. Ooooh.
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>

      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/nakajima/jquery-glow/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="c325ff6347e5e515ea96deb2230e0d8cc7e7f179" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="Make your elements glow. Ooooh.">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://nakajima.github.com/jquery-glow/" rel="nofollow">http://nakajima.github.com/jquery-glow/</a></p>
      </div>

      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/nakajima/jquery-glow/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="c325ff6347e5e515ea96deb2230e0d8cc7e7f179" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="http://nakajima.github.com/jquery-glow/">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>
      </div>
      <div class="rule "></div>
            <div id="url_box" class="url-box">
        <ul class="clone-urls">
          
            
            <li id="http_clone_url"><a href="https://github.com/nakajima/jquery-glow.git" data-permissions="Read-Only">HTTP</a></li>
            <li id="public_clone_url"><a href="git://github.com/nakajima/jquery-glow.git" data-permissions="Read-Only">Git Read-Only</a></li>
          
          
        </ul>
        <input type="text" spellcheck="false" id="url_field" class="url-field" />
              <span style="display:none" id="url_box_clippy"></span>
      <span id="clippy_tooltip_url_box_clippy" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=url_box_clippy&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=url_box_clippy&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

        <p id="url_description">This URL has <strong>Read+Write</strong> access</p>
      </div>
    </div>


        

      </div><!-- /.pagehead -->

      

  





<script type="text/javascript">
  GitHub.downloadRepo = '/nakajima/jquery-glow/archives/master'
  GitHub.revType = "master"

  GitHub.controllerName = "blob"
  GitHub.actionName     = "show"
  GitHub.currentAction  = "blob#show"

  

  
</script>






<div class="flash-messages"></div>


  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/nakajima/jquery-glow/commit/8bdcc11a415fceff02bb861b0a54fff19a7cc99e">Updated README to reflect new demo link</a> </pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="https://secure.gravatar.com/avatar/3399cbfb9e5fec93c324789b29309911?s=140&d=https://d3nwyuy0nl342s.cloudfront.net%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name"><a href="/nakajima">nakajima</a> <span>(author)</span></div>
        <div class="date">
          <abbr class="relatize" title="2009-06-05 18:47:21">Fri Jun 05 18:47:21 -0700 2009</abbr>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/nakajima/jquery-glow/commit/8bdcc11a415fceff02bb861b0a54fff19a7cc99e" hotkey="c">8bdcc11a415fceff02bb</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/nakajima/jquery-glow/tree/8bdcc11a415fceff02bb861b0a54fff19a7cc99e" hotkey="t">144942c7eef74ee90291</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/nakajima/jquery-glow/tree/8b7e886a9947cf9ade7ebb8436e6afd050eb9e40" hotkey="p">8b7e886a9947cf9ade7e</a>
      

    </div>
  </div>

    </div>
  </div>



  <div id="slider">

  

    <div class="breadcrumb" data-path="src/jquery.color.js/">
      <b><a href="/nakajima/jquery-glow/tree/8bdcc11a415fceff02bb861b0a54fff19a7cc99e">jquery-glow</a></b> / <a href="/nakajima/jquery-glow/tree/8bdcc11a415fceff02bb861b0a54fff19a7cc99e/src">src</a> / jquery.color.js       <span style="display:none" id="clippy_563">src/jquery.color.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_563&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_563&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="src/jquery.color.js/">
        
          <ul class="big-actions">
            
            <li><a class="file-edit-link minibutton" href="/nakajima/jquery-glow/file-edit/__current_ref__/src/jquery.color.js"><span>Edit this file</span></a></li>
          </ul>
        

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://d3nwyuy0nl342s.cloudfront.net/images/icons/txt.png" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                
                  <span>126 lines (108 sloc)</span>
                
                <span>3.79 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/nakajima/jquery-glow/raw/master/src/jquery.color.js" id="raw-url">raw</a></li>
                
                  <li><a href="/nakajima/jquery-glow/blame/master/src/jquery.color.js">blame</a></li>
                
                <li><a href="/nakajima/jquery-glow/commits/master/src/jquery.color.js">history</a></li>
              </ul>
            </div>
            
  <div class="data type-javascript">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
</pre>
          </td>
          <td width="100%">
            
              
                <div class="highlight"><pre><div class='line' id='LC1'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2'><span class="cm">/*</span></div><div class='line' id='LC3'><span class="cm"> * jQuery Color Animations</span></div><div class='line' id='LC4'><span class="cm"> * Copyright 2007 John Resig</span></div><div class='line' id='LC5'><span class="cm"> * Released under the MIT and GPL licenses.</span></div><div class='line' id='LC6'><span class="cm"> */</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="c1">// We override the animation for all of these color styles</span></div><div class='line' id='LC9'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">each</span><span class="p">([</span><span class="s1">&#39;backgroundColor&#39;</span><span class="p">,</span> <span class="s1">&#39;borderBottomColor&#39;</span><span class="p">,</span> <span class="s1">&#39;borderLeftColor&#39;</span><span class="p">,</span> <span class="s1">&#39;borderRightColor&#39;</span><span class="p">,</span> <span class="s1">&#39;borderTopColor&#39;</span><span class="p">,</span> <span class="s1">&#39;color&#39;</span><span class="p">,</span> <span class="s1">&#39;outlineColor&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">attr</span><span class="p">){</span></div><div class='line' id='LC10'>		<span class="nx">jQuery</span><span class="p">.</span><span class="nx">fx</span><span class="p">.</span><span class="nx">step</span><span class="p">[</span><span class="nx">attr</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fx</span><span class="p">){</span></div><div class='line' id='LC11'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">fx</span><span class="p">.</span><span class="nx">state</span> <span class="o">==</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC12'>						<span class="nx">fx</span><span class="p">.</span><span class="nx">start</span> <span class="o">=</span> <span class="nx">getColor</span><span class="p">(</span> <span class="nx">fx</span><span class="p">.</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">attr</span> <span class="p">);</span></div><div class='line' id='LC13'>						<span class="nx">fx</span><span class="p">.</span><span class="nx">end</span> <span class="o">=</span> <span class="nx">getRGB</span><span class="p">(</span> <span class="nx">fx</span><span class="p">.</span><span class="nx">end</span> <span class="p">);</span></div><div class='line' id='LC14'>				<span class="p">}</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>				<span class="nx">fx</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">attr</span><span class="p">]</span> <span class="o">=</span> <span class="s2">&quot;rgb(&quot;</span> <span class="o">+</span> <span class="p">[</span></div><div class='line' id='LC17'>						<span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span> <span class="nb">parseInt</span><span class="p">((</span><span class="nx">fx</span><span class="p">.</span><span class="nx">pos</span> <span class="o">*</span> <span class="p">(</span><span class="nx">fx</span><span class="p">.</span><span class="nx">end</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">-</span> <span class="nx">fx</span><span class="p">.</span><span class="nx">start</span><span class="p">[</span><span class="mi">0</span><span class="p">]))</span> <span class="o">+</span> <span class="nx">fx</span><span class="p">.</span><span class="nx">start</span><span class="p">[</span><span class="mi">0</span><span class="p">]),</span> <span class="mi">255</span><span class="p">),</span> <span class="mi">0</span><span class="p">),</span></div><div class='line' id='LC18'>						<span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span> <span class="nb">parseInt</span><span class="p">((</span><span class="nx">fx</span><span class="p">.</span><span class="nx">pos</span> <span class="o">*</span> <span class="p">(</span><span class="nx">fx</span><span class="p">.</span><span class="nx">end</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">-</span> <span class="nx">fx</span><span class="p">.</span><span class="nx">start</span><span class="p">[</span><span class="mi">1</span><span class="p">]))</span> <span class="o">+</span> <span class="nx">fx</span><span class="p">.</span><span class="nx">start</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span> <span class="mi">255</span><span class="p">),</span> <span class="mi">0</span><span class="p">),</span></div><div class='line' id='LC19'>						<span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span> <span class="nb">parseInt</span><span class="p">((</span><span class="nx">fx</span><span class="p">.</span><span class="nx">pos</span> <span class="o">*</span> <span class="p">(</span><span class="nx">fx</span><span class="p">.</span><span class="nx">end</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">-</span> <span class="nx">fx</span><span class="p">.</span><span class="nx">start</span><span class="p">[</span><span class="mi">2</span><span class="p">]))</span> <span class="o">+</span> <span class="nx">fx</span><span class="p">.</span><span class="nx">start</span><span class="p">[</span><span class="mi">2</span><span class="p">]),</span> <span class="mi">255</span><span class="p">),</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC20'>				<span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span><span class="p">;</span></div><div class='line' id='LC21'>		<span class="p">}</span></div><div class='line' id='LC22'><span class="p">});</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'><span class="c1">// Color Conversion functions from highlightFade</span></div><div class='line' id='LC25'><span class="c1">// By Blair Mitchelmore</span></div><div class='line' id='LC26'><span class="c1">// http://jquery.offput.ca/highlightFade/</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'><span class="c1">// Parse strings looking for color tuples [255,255,255]</span></div><div class='line' id='LC29'><span class="kd">function</span> <span class="nx">getRGB</span><span class="p">(</span><span class="nx">color</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>		<span class="kd">var</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>		<span class="c1">// Check if we&#39;re already dealing with an array of colors</span></div><div class='line' id='LC33'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">color</span> <span class="o">&amp;&amp;</span> <span class="nx">color</span><span class="p">.</span><span class="nx">constructor</span> <span class="o">==</span> <span class="nb">Array</span> <span class="o">&amp;&amp;</span> <span class="nx">color</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">3</span> <span class="p">)</span></div><div class='line' id='LC34'>				<span class="k">return</span> <span class="nx">color</span><span class="p">;</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>		<span class="c1">// Look for rgb(num,num,num)</span></div><div class='line' id='LC37'>		<span class="k">if</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="sr">/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">color</span><span class="p">))</span></div><div class='line' id='LC38'>				<span class="k">return</span> <span class="p">[</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">2</span><span class="p">]),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">3</span><span class="p">])];</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>		<span class="c1">// Look for rgb(num%,num%,num%)</span></div><div class='line' id='LC41'>		<span class="k">if</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="sr">/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">color</span><span class="p">))</span></div><div class='line' id='LC42'>				<span class="k">return</span> <span class="p">[</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span><span class="o">*</span><span class="mf">2.55</span><span class="p">,</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span><span class="o">*</span><span class="mf">2.55</span><span class="p">,</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">3</span><span class="p">])</span><span class="o">*</span><span class="mf">2.55</span><span class="p">];</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>		<span class="c1">// Look for #a0b1c2</span></div><div class='line' id='LC45'>		<span class="k">if</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="sr">/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">color</span><span class="p">))</span></div><div class='line' id='LC46'>				<span class="k">return</span> <span class="p">[</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="mi">16</span><span class="p">),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span><span class="mi">16</span><span class="p">),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span><span class="mi">16</span><span class="p">)];</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>		<span class="c1">// Look for #fff</span></div><div class='line' id='LC49'>		<span class="k">if</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="sr">/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">color</span><span class="p">))</span></div><div class='line' id='LC50'>				<span class="k">return</span> <span class="p">[</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">+</span><span class="nx">result</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="mi">16</span><span class="p">),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">+</span><span class="nx">result</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span><span class="mi">16</span><span class="p">),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span><span class="o">+</span><span class="nx">result</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span><span class="mi">16</span><span class="p">)];</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>		<span class="c1">// Look for rgba(0, 0, 0, 0) == transparent in Safari 3</span></div><div class='line' id='LC53'>		<span class="k">if</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="sr">/rgba\(0, 0, 0, 0\)/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">color</span><span class="p">))</span></div><div class='line' id='LC54'>				<span class="k">return</span> <span class="nx">colors</span><span class="p">[</span><span class="s1">&#39;transparent&#39;</span><span class="p">]</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>		<span class="c1">// Otherwise, we&#39;re most likely dealing with a named color</span></div><div class='line' id='LC57'>		<span class="k">return</span> <span class="nx">colors</span><span class="p">[</span><span class="nx">jQuery</span><span class="p">.</span><span class="nx">trim</span><span class="p">(</span><span class="nx">color</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">()];</span></div><div class='line' id='LC58'><span class="p">}</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'><span class="kd">function</span> <span class="nx">getColor</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">attr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>		<span class="kd">var</span> <span class="nx">color</span><span class="p">;</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'>		<span class="k">do</span> <span class="p">{</span></div><div class='line' id='LC64'>				<span class="nx">color</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">curCSS</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">attr</span><span class="p">);</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>				<span class="c1">// Keep going until we find an element that has color, or we hit the body</span></div><div class='line' id='LC67'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">color</span> <span class="o">!=</span> <span class="s1">&#39;&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">color</span> <span class="o">!=</span> <span class="s1">&#39;transparent&#39;</span> <span class="o">||</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="s2">&quot;body&quot;</span><span class="p">)</span> <span class="p">)</span></div><div class='line' id='LC68'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>				<span class="nx">attr</span> <span class="o">=</span> <span class="s2">&quot;backgroundColor&quot;</span><span class="p">;</span></div><div class='line' id='LC71'>		<span class="p">}</span> <span class="k">while</span> <span class="p">(</span> <span class="nx">elem</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">parentNode</span> <span class="p">);</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>		<span class="k">return</span> <span class="nx">getRGB</span><span class="p">(</span><span class="nx">color</span><span class="p">);</span></div><div class='line' id='LC74'><span class="p">};</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'><span class="c1">// Some named colors to work with</span></div><div class='line' id='LC77'><span class="c1">// From Interface by Stefan Petre</span></div><div class='line' id='LC78'><span class="c1">// http://interface.eyecon.ro/</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'><span class="kd">var</span> <span class="nx">colors</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC81'>	<span class="nx">aqua</span><span class="o">:</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">255</span><span class="p">,</span><span class="mi">255</span><span class="p">],</span></div><div class='line' id='LC82'>	<span class="nx">azure</span><span class="o">:</span><span class="p">[</span><span class="mi">240</span><span class="p">,</span><span class="mi">255</span><span class="p">,</span><span class="mi">255</span><span class="p">],</span></div><div class='line' id='LC83'>	<span class="nx">beige</span><span class="o">:</span><span class="p">[</span><span class="mi">245</span><span class="p">,</span><span class="mi">245</span><span class="p">,</span><span class="mi">220</span><span class="p">],</span></div><div class='line' id='LC84'>	<span class="nx">black</span><span class="o">:</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC85'>	<span class="nx">blue</span><span class="o">:</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">255</span><span class="p">],</span></div><div class='line' id='LC86'>	<span class="nx">brown</span><span class="o">:</span><span class="p">[</span><span class="mi">165</span><span class="p">,</span><span class="mi">42</span><span class="p">,</span><span class="mi">42</span><span class="p">],</span></div><div class='line' id='LC87'>	<span class="nx">cyan</span><span class="o">:</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">255</span><span class="p">,</span><span class="mi">255</span><span class="p">],</span></div><div class='line' id='LC88'>	<span class="nx">darkblue</span><span class="o">:</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">139</span><span class="p">],</span></div><div class='line' id='LC89'>	<span class="nx">darkcyan</span><span class="o">:</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">139</span><span class="p">,</span><span class="mi">139</span><span class="p">],</span></div><div class='line' id='LC90'>	<span class="nx">darkgrey</span><span class="o">:</span><span class="p">[</span><span class="mi">169</span><span class="p">,</span><span class="mi">169</span><span class="p">,</span><span class="mi">169</span><span class="p">],</span></div><div class='line' id='LC91'>	<span class="nx">darkgreen</span><span class="o">:</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">100</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC92'>	<span class="nx">darkkhaki</span><span class="o">:</span><span class="p">[</span><span class="mi">189</span><span class="p">,</span><span class="mi">183</span><span class="p">,</span><span class="mi">107</span><span class="p">],</span></div><div class='line' id='LC93'>	<span class="nx">darkmagenta</span><span class="o">:</span><span class="p">[</span><span class="mi">139</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">139</span><span class="p">],</span></div><div class='line' id='LC94'>	<span class="nx">darkolivegreen</span><span class="o">:</span><span class="p">[</span><span class="mi">85</span><span class="p">,</span><span class="mi">107</span><span class="p">,</span><span class="mi">47</span><span class="p">],</span></div><div class='line' id='LC95'>	<span class="nx">darkorange</span><span class="o">:</span><span class="p">[</span><span class="mi">255</span><span class="p">,</span><span class="mi">140</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC96'>	<span class="nx">darkorchid</span><span class="o">:</span><span class="p">[</span><span class="mi">153</span><span class="p">,</span><span class="mi">50</span><span class="p">,</span><span class="mi">204</span><span class="p">],</span></div><div class='line' id='LC97'>	<span class="nx">darkred</span><span class="o">:</span><span class="p">[</span><span class="mi">139</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC98'>	<span class="nx">darksalmon</span><span class="o">:</span><span class="p">[</span><span class="mi">233</span><span class="p">,</span><span class="mi">150</span><span class="p">,</span><span class="mi">122</span><span class="p">],</span></div><div class='line' id='LC99'>	<span class="nx">darkviolet</span><span class="o">:</span><span class="p">[</span><span class="mi">148</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">211</span><span class="p">],</span></div><div class='line' id='LC100'>	<span class="nx">fuchsia</span><span class="o">:</span><span class="p">[</span><span class="mi">255</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">255</span><span class="p">],</span></div><div class='line' id='LC101'>	<span class="nx">gold</span><span class="o">:</span><span class="p">[</span><span class="mi">255</span><span class="p">,</span><span class="mi">215</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC102'>	<span class="nx">green</span><span class="o">:</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">128</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC103'>	<span class="nx">indigo</span><span class="o">:</span><span class="p">[</span><span class="mi">75</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">130</span><span class="p">],</span></div><div class='line' id='LC104'>	<span class="nx">khaki</span><span class="o">:</span><span class="p">[</span><span class="mi">240</span><span class="p">,</span><span class="mi">230</span><span class="p">,</span><span class="mi">140</span><span class="p">],</span></div><div class='line' id='LC105'>	<span class="nx">lightblue</span><span class="o">:</span><span class="p">[</span><span class="mi">173</span><span class="p">,</span><span class="mi">216</span><span class="p">,</span><span class="mi">230</span><span class="p">],</span></div><div class='line' id='LC106'>	<span class="nx">lightcyan</span><span class="o">:</span><span class="p">[</span><span class="mi">224</span><span class="p">,</span><span class="mi">255</span><span class="p">,</span><span class="mi">255</span><span class="p">],</span></div><div class='line' id='LC107'>	<span class="nx">lightgreen</span><span class="o">:</span><span class="p">[</span><span class="mi">144</span><span class="p">,</span><span class="mi">238</span><span class="p">,</span><span class="mi">144</span><span class="p">],</span></div><div class='line' id='LC108'>	<span class="nx">lightgrey</span><span class="o">:</span><span class="p">[</span><span class="mi">211</span><span class="p">,</span><span class="mi">211</span><span class="p">,</span><span class="mi">211</span><span class="p">],</span></div><div class='line' id='LC109'>	<span class="nx">lightpink</span><span class="o">:</span><span class="p">[</span><span class="mi">255</span><span class="p">,</span><span class="mi">182</span><span class="p">,</span><span class="mi">193</span><span class="p">],</span></div><div class='line' id='LC110'>	<span class="nx">lightyellow</span><span class="o">:</span><span class="p">[</span><span class="mi">255</span><span class="p">,</span><span class="mi">255</span><span class="p">,</span><span class="mi">224</span><span class="p">],</span></div><div class='line' id='LC111'>	<span class="nx">lime</span><span class="o">:</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">255</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC112'>	<span class="nx">magenta</span><span class="o">:</span><span class="p">[</span><span class="mi">255</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">255</span><span class="p">],</span></div><div class='line' id='LC113'>	<span class="nx">maroon</span><span class="o">:</span><span class="p">[</span><span class="mi">128</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC114'>	<span class="nx">navy</span><span class="o">:</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">128</span><span class="p">],</span></div><div class='line' id='LC115'>	<span class="nx">olive</span><span class="o">:</span><span class="p">[</span><span class="mi">128</span><span class="p">,</span><span class="mi">128</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC116'>	<span class="nx">orange</span><span class="o">:</span><span class="p">[</span><span class="mi">255</span><span class="p">,</span><span class="mi">165</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC117'>	<span class="nx">pink</span><span class="o">:</span><span class="p">[</span><span class="mi">255</span><span class="p">,</span><span class="mi">192</span><span class="p">,</span><span class="mi">203</span><span class="p">],</span></div><div class='line' id='LC118'>	<span class="nx">purple</span><span class="o">:</span><span class="p">[</span><span class="mi">128</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">128</span><span class="p">],</span></div><div class='line' id='LC119'>	<span class="nx">violet</span><span class="o">:</span><span class="p">[</span><span class="mi">128</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">128</span><span class="p">],</span></div><div class='line' id='LC120'>	<span class="nx">red</span><span class="o">:</span><span class="p">[</span><span class="mi">255</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC121'>	<span class="nx">silver</span><span class="o">:</span><span class="p">[</span><span class="mi">192</span><span class="p">,</span><span class="mi">192</span><span class="p">,</span><span class="mi">192</span><span class="p">],</span></div><div class='line' id='LC122'>	<span class="nx">white</span><span class="o">:</span><span class="p">[</span><span class="mi">255</span><span class="p">,</span><span class="mi">255</span><span class="p">,</span><span class="mi">255</span><span class="p">],</span></div><div class='line' id='LC123'>	<span class="nx">yellow</span><span class="o">:</span><span class="p">[</span><span class="mi">255</span><span class="p">,</span><span class="mi">255</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC124'>	<span class="nx">transparent</span><span class="o">:</span> <span class="p">[</span><span class="mi">255</span><span class="p">,</span><span class="mi">255</span><span class="p">,</span><span class="mi">255</span><span class="p">]</span></div><div class='line' id='LC125'><span class="p">};</span></div><div class='line' id='LC126'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
              
            
          </td>
        </tr>
      </table>
    
  </div>


          </div>
        </div>
      </div>
    </div>
  

  </div>


<div class="frame frame-loading" style="display:none;">
  <img src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/ajax/big_spinner_336699.gif" height="32" width="32">
</div>

    </div>
  
      
    </div>

    <div id="footer" class="clearfix">
      <div class="site">
        <div class="sponsor">
          <a href="http://www.rackspace.com" class="logo">
            <img alt="Dedicated Server" height="36" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/footer/rackspace_logo.png?v2" width="38" />
          </a>
          Powered by the <a href="http://www.rackspace.com ">Dedicated
          Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
          Computing</a> of Rackspace Hosting<span>&reg;</span>
        </div>

        <ul class="links">
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
          <li><a href="/login/multipass?to=http%3A%2F%2Fsupport.github.com">Support</a></li>
          <li><a href="https://github.com/training">Training</a></li>
          <li><a href="http://jobs.github.com">Job Board</a></li>
          <li><a href="http://shop.github.com">Shop</a></li>
          <li><a href="https://github.com/contact">Contact</a></li>
          <li><a href="http://develop.github.com">API</a></li>
          <li><a href="http://status.github.com">Status</a></li>
        </ul>
        <ul class="sosueme">
          <li class="main">&copy; 2011 <span id="_rrt" title="0.07807s from fe5.rs.github.com">GitHub</span> Inc. All rights reserved.</li>
          <li><a href="/site/terms">Terms of Service</a></li>
          <li><a href="/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
        </ul>
      </div>
    </div><!-- /#footer -->

    
      
      
        <!-- current locale:  -->
        <div class="locales instapaper_ignore readability-footer">
          <div class="site">

            <ul class="choices clearfix limited-locales">
              <li><span class="current">English</span></li>
              
                  <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
              
                  <li><a rel="nofollow" href="?locale=fr">Français</a></li>
              
                  <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
              
                  <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
              
                  <li><a rel="nofollow" href="?locale=ru">Русский</a></li>
              
                  <li><a rel="nofollow" href="?locale=zh">中文</a></li>
              
              <li class="all"><a href="#" class="minibutton btn-forward js-all-locales"><span><span class="icon"></span>See all available languages</span></a></li>
            </ul>

            <div class="all-locales clearfix">
              <h3>Your current locale selection: <strong>English</strong>. Choose another?</h3>
              
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=en">English</a></li>
                  
                      <li><a rel="nofollow" href="?locale=af">Afrikaans</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ca">Català</a></li>
                  
                      <li><a rel="nofollow" href="?locale=cs">Čeština</a></li>
                  
                      <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=es">Español</a></li>
                  
                      <li><a rel="nofollow" href="?locale=fr">Français</a></li>
                  
                      <li><a rel="nofollow" href="?locale=hr">Hrvatski</a></li>
                  
                      <li><a rel="nofollow" href="?locale=hu">Magyar</a></li>
                  
                      <li><a rel="nofollow" href="?locale=id">Indonesia</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=it">Italiano</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
                  
                      <li><a rel="nofollow" href="?locale=nl">Nederlands</a></li>
                  
                      <li><a rel="nofollow" href="?locale=no">Norsk</a></li>
                  
                      <li><a rel="nofollow" href="?locale=pl">Polski</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ru">Русский</a></li>
                  
                      <li><a rel="nofollow" href="?locale=sr">Српски</a></li>
                  
                      <li><a rel="nofollow" href="?locale=sv">Svenska</a></li>
                  
                      <li><a rel="nofollow" href="?locale=zh">中文</a></li>
                  
                </ul>
              
            </div>

          </div>
          <div class="fade"></div>
        </div>
      
    

    <script>window._auth_token = "c325ff6347e5e515ea96deb2230e0d8cc7e7f179"</script>
    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Open tree</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>p</dt>
        <dd>Open parent</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selected down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selected up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle select target</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selected as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selected as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selected</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selected from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>

    <h3>Source Code Browsing</h3>
    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
      </div>
    </div>
  </div>

</div>
    

    <!--[if IE 8]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie8")
    </script>
    <![endif]-->

    <!--[if IE 7]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie7")
    </script>
    <![endif]-->

    
    <script type='text/javascript'></script>
    
  </body>
</html>

