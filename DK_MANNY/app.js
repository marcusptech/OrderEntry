// Start of Function trrxt Validation Code. Only allowing numbers //
function isNumberKey(evt)
{
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode != 46 && charCode != 45 && charCode > 31
    && (charCode < 48 || charCode > 57))
     return false;

  return true;
};
// End text Input Validation Function  code//
//Add Hyphen after 4th digiti // 
var input = document.getElementById("Input");
input.addEventListener("input", function() {
    if(input.value.length === 4) {
        input.value += "-";
    }
}); 
//End of Hyphen code //

let pattern= new RegExp("^[0-9]{4}-[0-9]{3}$");
let min = "0500-030";
let user = "0500-029";
console.log(user.length);
console.log(pattern.test(user));

// the USER cannot enter UNKNOWN ORDER#s code. Will Display an AlertBox //

// Create variables for the general contents for each manual //
const OrderNum1000 = ["1000-080", "1000-081", "1000-082", "1000-083"];

const OrderNum1100 = ["1150-080", "1150-081", "1150-082", "1150-083"];
const OrderNum1100_2 = ["1175-080", "1175-380"];

const OrderNum1200 = ["1200-006", "1200-007"];
const OrderNum1200_2 = ["1200-170", "1200-175"];
const OrderNum1200_3 = ["1211-080", "1211-081"];

const OrderNum1500 = ["1506-086", "1506-096"];
const OrderNum1500_2 = ["1513-080", "1515-080", "1515-081"];
const OrderNum1500_3 = ["1520-080", "1520-081", "1520-082", "1520-083", "1520-084"];

const OrderNum1600 = ["1601-080", "1601-081", "1601-087", "1601-088", "1601-089", "1601-090", "1601-180", "1601-380", "1601-381", "1601-480"];
const OrderNum1600_2 = ["1601-155", "1601-156"];
const OrderNum1600_3 = ["1601-195", "1601-197"];
const OrderNum1600_4 = ["1603-080", "1603-081", "1603-180", "1603-181"];

const OrderNum1800 = ["1802-082", "1802-089", "1802-090", "1802-091"];
const OrderNum1800_2 = ["1804-120", "1815-051", "1815-052", "1815-059", "1838-120"];
const OrderNum1800_3 = ["1804-701", "1804-702"];
const OrderNum1800_4 = ["1808-082", "1808-084", "1810-080", "1810-084"];
const OrderNum1800_5 = ["1808-085", "1810-095"];
const OrderNum1800_6 = ["1812-081", "1812-087", "1812-097"];
const OrderNum1800_7 = ["1812-089", "1812-095"];
const OrderNum1800_8 = ["1812-090", "1812-096"];
const OrderNum1800_9 = ["1815-069", "1815-070"];
const OrderNum1800_10 = ["1815-231", "1815-292", "1815-333", "1815-392", "2351-080", "2351-082"];
const OrderNum1800_11 = ["1815-247", "1815-248", "1815-249", "1815-250"];
const OrderNum1800_12 = ["1815-680", "1815-684"];
const OrderNum1800_13 = ["1816-080", "1816-082"];
const OrderNum1800_14 = ["1833-080", "1835-080", "1837-080"];
const OrderNum1800_15 = "1830-185";
const OrderNum1800_16 = "1830-186";
const OrderNum1800_17 = "1834-080";
const OrderNum1800_18 = "1838-081";

const OrderNum9000 = ["9000-080", "9000-081", "9000-082", "9000-083", "9000-084", "9000-085", "9000-086", "9000-087", "9000-088", "9000-089", "9000-090", "9000-380", "9000-381", "9000-385", "9000-386"];
const OrderNum9000_2 = ["9024-080", "9024-380"];
const OrderNum9000_3 = ["9024-081", "9024-381"];
const OrderNum9000_4= ["9050-080", "9050-380", "9050-385"];
const OrderNum9000_5 = ["9100-080", "9100-380", "9100-385"];
const OrderNum9000_6 = ["9150-080", "9150-081", "9150-082", "9150-083", "9150-084", "9150-085", "9150-086", "9150-087", "9150-088", "9150-089", "9150-090", "9150-380", "9150-384", "9150-385", "9150-386"];
const OrderNum9000_7 = ["9210-080", "9210-081", "9210-082", "9210-083", "9210-084", "9210-085", "9210-086", "9210-087", "9210-088", "9210-089", "9210-090", "9210-380", "9210-381", "9210-382", "9210-383", "9210-384", "9210-385", "9210-386", "9210-387", "9210-388", "9210-389", "9210-390", "9210-391", "9220-381", "9220-383", "9220-385", "9220-387", "9220-389", "9230-080", "9230-081", "9230-380", "9230-081", "9230-380", "9230-381", "9230-382", "9235-080", "9235-081", "9235-380", "9235-381", "9240-080", "9240-081", "9240-380", "9240-381", "9245-080", "9245-081"];
const OrderNum9000_8 = ["9310-080", "9310-081", "9310-082", "9310-083", "9310-084", "9310-085", "9310-086", "9310-087", "9310-088", "9310-089", "9310-090", "9310-091", "9310-092", "9310-093", "9310-094", "9310-095", "9310-096", "9310-097"];
const OrderNum9000_9 = ["9530-080", "9530-081", "9530-082", "9530-380", "9530-381", "9530-382", "9530-389", "9550-080", "9550-081", "9550-082", "9550-380", "9550-381", "9550-382", "9555-080", "9555-081", "9555-082", "9555-380", "9555-382", "9556-080", "9556-081", "9575-080", "9575-380"];

const warranty = ["n/a", 1, 2, 5];
const vac = ["16","24"];

const SetQuickstart = ["1000-066", "1150-066", "1175-066", "1601-366", "1603-066", "1802-066", "1812-167", "1812-168", "1812-AP"];
const SetQuickstart2 = ["2358-066", "2333-066", "4302-066", "4302-068"];
const SetQuickstart3 = ["6002-066", "6003-066", "6004-066", "6005-066", "6006-066", "6050-066", "6300-066", "6400-066", "6500-066"];
const SetQuickstart4 = ["9000-066", "9050-066", "9100-066", "9150-066", "9210-066", "9240-066", "9500-066"];

const IPBSet = ["1150-080", "1150-225", "1150-226", "1150-227", "1150-228"];
const IPBSet2 = ["1200-081", "1200-085", "1200-086", "1200-087", "1201-250", "1204-120", "1204-121", "1204-122", "1204-123"];
const IPBSet3 = ["1520-880"];
const IPBSet4 = ["1601-048", "1601-049", "1601-071", "1601-083", "1601-084", "1601-119", "1601-172", "1601-195", "1601-197", "1601-216", "1601-235", "1601-240", "1601-241", "1601-242", "1601-270", "1601-289", "1601-295", "1601-369", "1601-380", "1601-381", "1601-383", "1601-384", "1601-400", "1601-401", "1601-530", "1601-532", "1601-538", "1601-555", "1601-567", "1601-610", "1601-800", "1601-802", "1601-812"];
const IPBSet5 = ["1602-066", "1602-090", "1602-091", "1602-162", "1602-164", "1602-166", "1602-170", "1602-222", "1602-282", "1602-284", "1602-287", "1602-294", "1602-297"];
const IPBSet6 = ["1603", "1603-165", "1603-380", "1603-381", "1603-580","1603-863", "1603-868"];
const IPBSet7 = ["1610-080", "1610-081", "1610-082", "1610-083", "1610-087", "1610-088", "1610-091", "1610-093", "1610-097", "1610-098"];
const IPBSet8 = ["1620-080", "1620-090"];
const IPBSet9 = ["1803-Flush", "1803-Surface", "1810-Flush", "1810-Surface"];
const IPBSet10 = ["1812-081", "1812-087", "1812-088", "1812-089", "1812-090", "1812-091", "1812-092", "1812-093", "1812-094", "1812-095", "1812-096", "1815-580"];
const IPBSet11 = ["1833-Flush", "1833-Surface", "1834-090", "1834-Surface", "1834-Flush", "1834-Wall", "1835-Flush", "1835-Surface", "1835-Wall", "1838-A", "1838-AccessPlus"];
const IPBSet12 = ["2600-263", "2600-264", "2600-671", "2600-674", "2600-866"];
const IPBSet13 = ["6003-080", "6004-080", "6006-380", "6050-080", "6050-081"];
const IPBSet14 = ["6100-080", "6100-081", "6100-082", "6100-083", "6100-871", "6100-874"];
const IPBSet15 = ["6300-Cover-Assy", "6300-042", "6300-080", "6300-081", "6300-082", "6300-082", "6300-083", "6300-084", "6300-085", "6300-086", "6300-087", "6300-088", "6300-089", "6300-090", "6300-091", "6300-092", "6300-093", "6300-094", "6300-095"];
const IPBSet16 = ["6500-380", "6500-381", "6500-384", "6500-385", "6500-400", "6500-410", "6500-420", "6500-430", "6500-440", "6500-453", "6500-480", "6500-490"];
const IPBSet17 = ["6524-380", "6524-381", "6550-380", "6550-384", "6550-430", "6550-490"];
const IPBSet18 = ["8080-060", "9000-080", "9000-081", "9000-085", "9000-086"];
const IPBSet19 = ["9024-380", "9024-381", "9050-080", "9100-080", "6"];
const IPBSet20 = ["9150-866", "9150-880", "9150-881", "9150-882", "9150-883", "9150-884", "9150-884", "9150-885", "9150-886", "9150-887", "9150-888", "9150-889", "9150-890", "9150-891", "9150-892", "9150-893", "9150-894", "9150-895"];
const IPBSet21 = ["9200-021", "9200-022", "9200-023", "9210-380"];
const IPBSet22 = ["9310-080", "9310-081", "9310-082", "9310-083", "9310-084", "9310-085", "9310-086", "9310-087", "9310-088", "9310-089", "9310-090", "9310-091", "9310-092", "9310-093", "9310-094", "9310-095", "9310-096", "9310-097"];
const IPBSet23 = ["9530-080", "9550-080", "9550-206", "9555-080", "9575-080"];



// End of Code //
