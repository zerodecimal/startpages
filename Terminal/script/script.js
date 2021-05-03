const Config = {
    name: "eric",
    scale: 1,
    Links: [
        [
            "resources",
            [
                ["git", "http://git-scm.com/doc"],
                ["puppet", "https://puppet.com/docs"],
                ["ruby", "http://ruby-doc.org/core-2.4.9/"],
                ["python", "https://docs.python.org/2.7/"],
                ["terraform", "https://www.terraform.io/docs/providers/oci/index.html"],
                ["bash", "http://www.tldp.org/LDP/abs/html/"]
            ]
        ],
        [
            "code",
            [
                ["github", "https://github.com/"],
                ["gitlab", "https://rzslcgitrepo1.rz.nucorsteel.local/"],
                ["travis", "https://travis-ci.com/"]
            ]
        ],
        [
            "cloud",
            [
                ["oci-console", "https://console.us-ashburn-1.oraclecloud.com/"],
                ["omc", "https://smgnextgenomcs-nucorsmgtech.uscom-central-1.oraclecloud.com/emsaasui/emcpdfui/welcome.html"],
                ["iaas-docs", "https://docs.cloud.oracle.com/iaas/Content/home.htm"],
                ["cloud-support", "https://support.oracle.com/cloud/faces/serviceRequests"]
            ]
        ],
        [
            "trading",
            [
                ["markets", "https://www.marketwatch.com/"],
                ["futures", "https://www.investing.com/indices/indices-futures"],
                ["stocks", "https://www.etrade.com/"],
                ["crypto", "https://www.coinbase.com/"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
