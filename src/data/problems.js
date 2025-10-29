import { CONSTRAINTS_TIP } from './constants';
export const problems = [
  // ================= 3 EASY PROBLEMS =================

  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    company: "Accenture",
    topics: ["Array", "Hash Table"],
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
    constraints: ["`2 <= nums.length <= 10^4`", "`-10^9 <= nums[i] <= 10^9`", "`-10^9 <= target <= 10^9`", "**Only one valid answer exists.**"],
    constraints_tip: CONSTRAINTS_TIP,
    examples: [
        { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0,1]." },
        { input: "nums = [3,2,4], target = 6", output: "[1,2]" }
    ],
    starterCode: {
      python: `from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # YOUR CODE HERE
        pass`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // YOUR CODE HERE
};`,
      cpp: `#include <vector>
#include <unordered_map>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        // YOUR CODE HERE
        return {};
    }
};`,
      java: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // YOUR CODE HERE
        return new int[0];
    }
}`
    },
    driverCode: {
        python: `import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    nums = list(map(int, lines[0].strip().split()))\n    target = int(lines[1].strip())\n    \n    sol = Solution()\n    result = sol.twoSum(nums, target)\n    result.sort()\n    print(json.dumps(result, separators=(',', ':')))`,
        javascript: `// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst nums = input[0].split(' ').map(Number);\nconst target = Number(input[1]);\nconst result = twoSum(nums, target);\nresult.sort((a, b) => a - b);\nconsole.log(JSON.stringify(result));`,
        cpp: `#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <unordered_map>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line1, line2;\n    std::getline(std::cin, line1);\n    std::getline(std::cin, line2);\n\n    std::stringstream ss(line1);\n    std::vector<int> nums;\n    int num;\n    while (ss >> num) { nums.push_back(num); }\n    int target = std::stoi(line2);\n\n    Solution sol;\n    std::vector<int> result = sol.twoSum(nums, target);\n    std::sort(result.begin(), result.end());\n\n    std::cout << "[";\n    for (size_t i = 0; i < result.size(); ++i) {\n        std::cout << result[i] << (i == result.size() - 1 ? \"\" : \",\");\n    }\n    std::cout << \"]\" << std::endl;\n    return 0;\n}`,
        java: `import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] numsStr = sc.nextLine().split(\" \");\n        int[] nums = new int[numsStr.length];\n        for (int i = 0; i < numsStr.length; i++) {\n            nums[i] = Integer.parseInt(numsStr[i]);\n        }\n        int target = sc.nextInt();\n\n        Solution sol = new Solution();\n        int[] result = sol.twoSum(nums, target);\n        Arrays.sort(result);\n        System.out.println(Arrays.toString(result).replaceAll(\" \", \"\"));\n        sc.close();\n    }\n}`
    },
    testCases: [ { input: "2 7 11 15\n9", expected: "[0,1]" }, { input: "3 2 4\n6", expected: "[1,2]" }, { input: "3 3\n6", expected: "[0,1]" } ],
    languageIds: { python: 71, javascript: 93, cpp: 54, java: 91 }
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    company: "Wipro",
    topics: ["String", "Two Pointers"],
    description: `Write a function that reverses a string. The input string is given as an array of characters \`s\`.\n You must do this by modifying the input array in-place with O(1) extra memory.`,
    constraints: ["`1 <= s.length <= 10^5`", "`s[i]` is a printable ascii character."],
    constraints_tip: CONSTRAINTS_TIP,
    examples: [ 
        { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
        { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' }
    ],
    starterCode: {
      python: `from typing import List\n\nclass Solution:\n    def reverseString(self, s: List[str]) -> None:\n        # YOUR CODE HERE\n        pass`,
      javascript: `/**\n * @param {character[]} s\n * @return {void} Do not return anything, modify s in-place instead.\n */\nvar reverseString = function(s) {\n    // YOUR CODE HERE\n};`,
      cpp: `#include <vector>\n#include <algorithm>\n\nclass Solution {\npublic:\n    void reverseString(std::vector<char>& s) {\n        // YOUR CODE HERE\n    }\n};`,
      java: `class Solution {\n    public void reverseString(char[] s) {\n        // YOUR CODE HERE\n    }\n}`
    },
    driverCode: {
        python: `import sys\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    s_list = sys.stdin.readline().strip().split(' ')\n    if len(s_list) == 1 and s_list[0] == '':\n        s_list = []\n    sol = Solution()\n    sol.reverseString(s_list)\n    print(' '.join(s_list))`,
        javascript: `// __USER_CODE_HERE__\n\nconst fs = require('fs');\nlet s = fs.readFileSync(0, 'utf-8').trim().split(' ');\nif (s.length === 1 && s[0] === '') {\n    s = [];\n}\nreverseString(s);\nconsole.log(s.join(' '));`,
        cpp: `#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    std::stringstream ss(line);\n    std::vector<char> s;\n    std::string item;\n    while (ss >> item) {\n        if (!item.empty()) {\n            s.push_back(item[0]);\n        }\n    }\n    \n    Solution sol;\n    sol.reverseString(s);\n    \n    for (size_t i = 0; i < s.size(); ++i) {\n        std::cout << s[i] << (i == s.size() - 1 ? \"\" : \" \");\n    }\n    std::cout << std::endl;\n    return 0;\n}`,
        java: `import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        String[] sStr = line.split(\" \");\n        char[] s;\n        if (sStr.length == 1 && sStr[0].isEmpty()) {\n            s = new char[0];\n        } else {\n            s = new char[sStr.length];\n            for (int i = 0; i < sStr.length; i++) { s[i] = sStr[i].charAt(0); }\n        }\n\n        Solution sol = new Solution();\n        sol.reverseString(s);\n\n        for (int i = 0; i < s.length; i++) {\n            System.out.print(s[i] + (i == s.length - 1 ? \"\" : \" \"));\n        }\n        System.out.println();\n        sc.close();\n    }\n}`
    },
    testCases: [ { input: "h e l l o", expected: "o l l e h" }, { input: "H a n n a h", expected: "h a n n a H" }, { input: "", expected: "" } ],
    languageIds: { python: 71, javascript: 93, cpp: 54, java: 91 }
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    company: "Deloitte",
    topics: ["Math"],
    description: "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.",
    constraints: ["`-2^31 <= x <= 2^31 - 1`"],
    constraints_tip: CONSTRAINTS_TIP,
    examples: [ 
        { input: "x = 121", output: "true" },
        { input: "x = -121", output: "false", explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."}
    ],
    starterCode: {
      python: `class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        # YOUR CODE HERE\n        pass`,
      javascript: `var isPalindrome = function(x) {\n    // YOUR CODE HERE\n};`,
      cpp: `#include <string>\n#include <algorithm>\n\nclass Solution {\npublic:\n    bool isPalindrome(int x) {\n        // YOUR CODE HERE\n        return false;\n    }\n};`,
      java: `class Solution {\n    public boolean isPalindrome(int x) {\n        // YOUR CODE HERE\n        return false;\n    }\n}`
    },
    driverCode: {
        python: `import sys\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    x = int(sys.stdin.readline().strip())\n    sol = Solution()\n    result = sol.isPalindrome(x)\n    print(str(result).lower())`,
        javascript: `// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst x = Number(fs.readFileSync(0, 'utf-8').trim());\nconst result = isPalindrome(x);\nconsole.log(result);`,
        cpp: `#include <iostream>\n#include <string>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nint main() {\n    int x;\n    std::cin >> x;\n    Solution sol;\n    bool result = sol.isPalindrome(x);\n    std::cout << (result ? \"true\" : \"false\") << std::endl;\n    return 0;\n}`,
        java: `import java.util.Scanner;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int x = sc.nextInt();\n        Solution sol = new Solution();\n        boolean result = sol.isPalindrome(x);\n        System.out.println(result);\n        sc.close();\n    }\n}`
    },
    testCases: [ { input: "121", expected: "true" }, { input: "-121", expected: "false" }, { input: "10", expected: "false" } ],
    languageIds: { python: 71, javascript: 93, cpp: 54, java: 91 }
  },

  // ================= 4 MEDIUM PROBLEMS =================
  
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Medium",
    company: "Deloitte",
    topics: ["Stack", "String"],
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type and in the correct order.`,
    examples: [ 
        { input: 's = "()"', output: "true" },
        { input: 's = "()[]{}"', output: "true" }
    ],
    constraints: ["`1 <= s.length <= 10^4`", "`s` consists of parentheses only `'()[]{}'`."],
    constraints_tip: CONSTRAINTS_TIP,
    starterCode: {
      python: `class Solution:\n    def isValid(self, s: str) -> bool:\n        # YOUR CODE HERE\n        pass`,
      javascript: `var isValid = function(s) {\n    // YOUR CODE HERE\n};`,
      cpp: `#include <string>\n#include <stack>\n\nclass Solution {\npublic:\n    bool isValid(std::string s) {\n        // YOUR CODE HERE\n        return false;\n    }\n};`,
      java: `import java.util.*;\n\nclass Solution {\n    public boolean isValid(String s) {\n        // YOUR CODE HERE\n        return false;\n    }\n}`
    },
    driverCode: {
        python: `import sys\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    s = sys.stdin.readline().strip()\n    sol = Solution()\n    result = sol.isValid(s)\n    print(str(result).lower())`,
        javascript: `// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst s = fs.readFileSync(0, 'utf-8').trim();\nconst result = isValid(s);\nconsole.log(result);`,
        cpp: `#include <iostream>\n#include <string>\n#include <stack>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string s;\n    std::cin >> s;\n    Solution sol;\n    bool result = sol.isValid(s);\n    std::cout << (result ? \"true\" : \"false\") << std::endl;\n    return 0;\n}`,
        java: `import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        Solution sol = new Solution();\n        boolean result = sol.isValid(s);\n        System.out.println(result);\n        sc.close();\n    }\n}`
    },
    testCases: [ { input: "()", expected: "true" }, { input: "()[]{}", expected: "true" }, { input: "(]", expected: "false" } ],
    languageIds: { python: 71, javascript: 93, cpp: 54, java: 91 }
  },
  {
    id: "longest-substring",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    company: "Wipro",
    topics: ["String", "Sliding Window"],
    description: "Given a string `s`, find the length of the longest substring without repeating characters.",
    examples: [ 
        { input: 's = "abcabcbb"', output: "3", explanation: "The answer is \"abc\", with the length of 3." },
        { input: 's = "bbbbb"', output: "1", explanation: "The answer is \"b\", with the length of 1."}
    ],
    constraints: ["`0 <= s.length <= 5 * 10^4`", "`s` consists of English letters, digits, symbols and spaces."],
    constraints_tip: CONSTRAINTS_TIP,
    starterCode: {
      python: `class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        # YOUR CODE HERE\n        pass`,
      javascript: `var lengthOfLongestSubstring = function(s) {\n    // YOUR CODE HERE\n};`,
      cpp: `#include <string>\n#include <unordered_map>\n\nclass Solution {\npublic:\n    int lengthOfLongestSubstring(std::string s) {\n        // YOUR CODE HERE\n        return 0;\n    }\n};`,
      java: `import java.util.HashMap;\n\nclass Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // YOUR CODE HERE\n        return 0;\n    }\n}`
    },
    driverCode: {
        python: `import sys\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    s = sys.stdin.readline().strip()\n    sol = Solution()\n    result = sol.lengthOfLongestSubstring(s)\n    print(result)`,
        javascript: `// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst s = fs.readFileSync(0, 'utf-8').trim();\nconst result = lengthOfLongestSubstring(s);\nconsole.log(result);`,
        cpp: `#include <iostream>\n#include <string>\n#include <algorithm>\n#include <unordered_map>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string s;\n    std::getline(std::cin, s);\n    Solution sol;\n    int result = sol.lengthOfLongestSubstring(s);\n    std::cout << result << std::endl;\n    return 0;\n}`,
        java: `import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        Solution sol = new Solution();\n        int result = sol.lengthOfLongestSubstring(s);\n        System.out.println(result);\n        sc.close();\n    }\n}`
    },
    testCases: [ { input: "abcabcbb", expected: "3" }, { input: "bbbbb", expected: "1" }, { input: "pwwkew", expected: "3" }, { input: "", expected: "0" } ],
    languageIds: { python: 71, javascript: 93, cpp: 54, java: 91 }
  },
  {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    company: "Accenture",
    topics: ["Array", "Hash Table", "String"],
    description: "Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.",
    examples: [ { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' } ],
    constraints: ["`1 <= strs.length <= 10^4`", "`0 <= strs[i].length <= 100`", "`strs[i]` consists of lowercase English letters."],
    constraints_tip: CONSTRAINTS_TIP,
     starterCode: {
      python: `from typing import List\n\nclass Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        # YOUR CODE HERE\n        pass`,
      javascript: `/**\n * @param {string[]} strs\n * @return {string[][]}\n */\nvar groupAnagrams = function(strs) {\n    // YOUR CODE HERE\n};`,
      cpp: `#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nclass Solution {\npublic:\n    std::vector<std::vector<std::string>> groupAnagrams(std::vector<std::string>& strs) {\n        // YOUR CODE HERE\n        return {};\n    }\n};`,
      java: `import java.util.*;\n\nclass Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // YOUR CODE HERE\n        return new ArrayList<>();\n    }\n}`
    },
    driverCode: {
        python: `import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    strs = json.loads(sys.stdin.readline().strip())\n    sol = Solution()\n    result = sol.groupAnagrams(strs)\n    # Sort inner lists and then the outer list for consistent output\n    for lst in result:\n        lst.sort()\n    result.sort(key=lambda x: x[0] if x else \"\")\n    print(json.dumps(result, separators=(',', ':')))`,
        javascript: `// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst strs = JSON.parse(fs.readFileSync(0, 'utf-8').trim());\nconst result = groupAnagrams(strs);\n// Sort for consistent output\nresult.forEach(arr => arr.sort());\nresult.sort((a,b) => (a[0] || \"\").localeCompare(b[0] || \"\"));\nconsole.log(JSON.stringify(result));`,
        // ✅ Removed json.hpp; manual parse+print
        cpp: `#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nstatic std::vector<std::string> parseStrings(const std::string& line){\n    std::vector<std::string> out; std::string cur; bool inq=false;\n    for(size_t i=0;i<line.size();++i){\n        char c=line[i];\n        if(c=='\"'){\n            if(!inq){ inq=true; cur.clear(); }\n            else{ inq=false; out.push_back(cur); cur.clear(); }\n        } else if(inq){ cur.push_back(c); }\n    }\n    return out;\n}\n\nint main(){\n    std::string line; std::getline(std::cin,line);\n    std::vector<std::string> strs=parseStrings(line);\n    Solution sol; auto result=sol.groupAnagrams(strs);\n    for(auto& v:result) std::sort(v.begin(),v.end());\n    std::sort(result.begin(),result.end(),[](const std::vector<std::string>& a,const std::vector<std::string>& b){\n        std::string aa=a.empty()?\"\":a[0]; std::string bb=b.empty()?\"\":b[0];\n        return aa<bb;\n    });\n    std::cout<<\"[\";\n    for(size_t i=0;i<result.size();++i){\n        std::cout<<\"[\";\n        for(size_t j=0;j<result[i].size();++j){\n            std::cout<<\"\\\"\"<<result[i][j]<<\"\\\"\"<<(j+1<result[i].size()?',':0);\n        }\n        std::cout<<\"]\"<<(i+1<result.size()?\",\":\"\");\n    }\n    std::cout<<\"]\\n\";\n    return 0;\n}`,
        // ✅ Removed org.json; manual parse+print
        java: `import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main{\n    private static String[] parseStrings(String line){\n        List<String> list=new ArrayList<>();\n        boolean inq=false; StringBuilder cur=new StringBuilder();\n        for(int i=0;i<line.length();i++){\n            char c=line.charAt(i);\n            if(c=='\"'){\n                if(!inq){inq=true;cur.setLength(0);} else {inq=false;list.add(cur.toString());}\n            }else if(inq){cur.append(c);}        }\n        return list.toArray(new String[0]);\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        String line=sc.nextLine();\n        String[] strs=parseStrings(line);\n        Solution sol=new Solution();\n        List<List<String>> result=sol.groupAnagrams(strs);\n        for(List<String> g:result) Collections.sort(g);\n        result.sort(Comparator.comparing(g->g.isEmpty()?\"\":g.get(0)));\n        StringBuilder sb=new StringBuilder();\n        sb.append('[');\n        for(int i=0;i<result.size();i++){\n            sb.append('[');\n            List<String> g=result.get(i);\n            for(int j=0;j<g.size();j++){\n                sb.append('\"').append(g.get(j)).append('\"');\n                if(j+1<g.size()) sb.append(',');\n            }\n            sb.append(']');\n            if(i+1<result.size()) sb.append(',');\n        }\n        sb.append(']');\n        System.out.println(sb.toString());\n        sc.close();\n    }\n}`
    },
    testCases: [ { input: `["eat","tea","tan","ate","nat","bat"]`, expected: `[["ate","eat","tea"],["bat"],["nat","tan"]]` }, { input: `[""]`, expected: `[[""]]` }, { input: `["a"]`, expected: `[["a"]]` } ],
    languageIds: { python: 71, javascript: 93, cpp: 54, java: 91 }
  },
  {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    company: "Cognizant",
    topics: ["Array", "Prefix Sum"],
    description: "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.",
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" }
    ],
    constraints: ["`2 <= nums.length <= 10^5`", "`-30 <= nums[i] <= 30`", "The product of any prefix or suffix of `nums` is **guaranteed to fit in a 32-bit integer**."],
    constraints_tip: CONSTRAINTS_TIP,
    starterCode: {
      python: `from typing import List\n\nclass Solution:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        # YOUR CODE HERE\n        pass`,
      javascript: `var productExceptSelf = function(nums) {\n    // YOUR CODE HERE\n};`,
      cpp: `#include <vector>\n\nclass Solution {\npublic:\n    std::vector<int> productExceptSelf(std::vector<int>& nums) {\n        // YOUR CODE HERE\n        return {};\n    }\n};`,
      java: `class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // YOUR CODE HERE\n        return new int[0];\n    }\n}`
    },
    driverCode: {
        python: `import sys\nimport json\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    nums = json.loads(sys.stdin.readline().strip())\n    sol = Solution()\n    result = sol.productExceptSelf(nums)\n    print(json.dumps(result, separators=(',',':')))\n`,
        javascript: `// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst nums = JSON.parse(fs.readFileSync(0, 'utf-8').trim());\nconst result = productExceptSelf(nums);\nconsole.log(JSON.stringify(result));`,
        // ✅ Removed json.hpp; manual parse+print
        cpp: `#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n\n// __USER_CODE_HERE__\n\nstatic std::vector<int> parseInts(const std::string& line){\n    std::vector<int> v; int x=0; bool innum=false,neg=false; \n    for(size_t i=0;i<line.size();++i){char c=line[i];\n        if(c=='-'){neg=true;}\n        else if(c>='0'&&c<='9'){innum=true; x=x*10+(c-'0');}\n        else{ if(innum){ v.push_back(neg?-x:x); x=0; innum=false; neg=false; }}\n    }\n    if(innum) v.push_back(neg?-x:x);\n    return v;\n}\n\nint main(){\n    std::string line; std::getline(std::cin,line);\n    std::vector<int> nums=parseInts(line);\n    Solution sol; auto result=sol.productExceptSelf(nums);\n    std::cout<<\"[\";\n    for(size_t i=0;i<result.size();++i){\n        std::cout<<result[i]<<(i+1<result.size()?\",\":\"\");\n    }\n    std::cout<<\"]\\n\";\n    return 0;\n}`,
        // ✅ Removed org.json; manual parse+print
        java: `import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main{\n    private static int[] parseInts(String line){\n        List<Integer> list=new ArrayList<>();\n        int x=0; boolean in=false,neg=false; \n        for(int i=0;i<line.length();i++){\n            char c=line.charAt(i);\n            if(c=='-'){neg=true;}\n            else if(Character.isDigit(c)){in=true; x=x*10+(c-'0');}\n            else{ if(in){ list.add(neg?-x:x); x=0; in=false; neg=false; }}\n        }\n        if(in) list.add(neg?-x:x);\n        int[] a=new int[list.size()]; for(int i=0;i<a.length;i++) a[i]=list.get(i);\n        return a;\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        String line=sc.nextLine();\n        int[] nums=parseInts(line);\n        Solution sol=new Solution();\n        int[] result=sol.productExceptSelf(nums);\n        StringBuilder sb=new StringBuilder();\n        sb.append('[');\n        for(int i=0;i<result.length;i++){\n            sb.append(result[i]);\n            if(i+1<result.length) sb.append(',');\n        }\n        sb.append(']');\n        System.out.println(sb.toString());\n        sc.close();\n    }\n}`
    },
    testCases: [ { input: "[1,2,3,4]", expected: "[24,12,8,6]" }, { input: "[-1,1,0,-3,3]", expected: "[0,0,9,0,0]" } ],
    languageIds: { python: 71, javascript: 93, cpp: 54, java: 91 }
  },
  
  // ================= 3 HARD PROBLEMS =================

  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    company: "Deloitte",
    topics: ["Array", "Two Pointers", "Stack"],
    description: "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    examples: [ 
        { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
        { input: "height = [4,2,0,3,2,5]", output: "9" }
    ],
    constraints: ["`n == height.length`", "`1 <= n <= 2 * 10^4`", "`0 <= height[i] <= 10^5`"],
    constraints_tip: CONSTRAINTS_TIP,
    starterCode: {
      python: `from typing import List\n\nclass Solution:\n    def trap(self, height: List[int]) -> int:\n        # YOUR CODE HERE\n        pass`,
      javascript: `var trap = function(height) {\n    // YOUR CODE HERE\n};`,
      cpp: `#include <vector>\n\nclass Solution {\npublic:\n    int trap(std::vector<int>& height) {\n        // YOUR CODE HERE\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int trap(int[] height) {\n        // YOUR CODE HERE\n        return 0;\n    }\n}`
    },
    driverCode: {
        python: `import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    height = json.loads(sys.stdin.readline().strip())\n    sol = Solution()\n    result = sol.trap(height)\n    print(result)`,
        javascript: `// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst height = JSON.parse(fs.readFileSync(0, 'utf-8').trim());\nconst result = trap(height);\nconsole.log(result);`,
        // ✅ Removed json.hpp; manual parse
        cpp: `#include <iostream>\n#include <vector>\n#include <string>\n\n// __USER_CODE_HERE__\n\nstatic std::vector<int> parseInts(const std::string& line){\n    std::vector<int> v; int x=0; bool in=false,neg=false;\n    for(size_t i=0;i<line.size();++i){char c=line[i];\n        if(c=='-'){neg=true;}\n        else if(c>='0'&&c<='9'){in=true; x=x*10+(c-'0');}\n        else{ if(in){ v.push_back(neg?-x:x); x=0; in=false; neg=false; }}\n    }\n    if(in) v.push_back(neg?-x:x);\n    return v;\n}\n\nint main(){\n    std::string line; std::getline(std::cin,line);\n    std::vector<int> height=parseInts(line);\n    Solution sol; int result=sol.trap(height);\n    std::cout<<result<<\"\\n\";\n    return 0;\n}`,
        // ✅ Removed org.json; manual parse
        java: `import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main{\n    private static int[] parseInts(String line){\n        List<Integer> list=new ArrayList<>();\n        int x=0; boolean in=false,neg=false;\n        for(int i=0;i<line.length();i++){\n            char c=line.charAt(i);\n            if(c=='-'){neg=true;}\n            else if(Character.isDigit(c)){in=true; x=x*10+(c-'0');}\n            else{ if(in){ list.add(neg?-x:x); x=0; in=false; neg=false; }}\n        }\n        if(in) list.add(neg?-x:x);\n        int[] a=new int[list.size()]; for(int i=0;i<a.length;i++) a[i]=list.get(i);\n        return a;\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        String line=sc.nextLine();\n        int[] height=parseInts(line);\n        Solution sol=new Solution();\n        int result=sol.trap(height);\n        System.out.println(result);\n        sc.close();\n    }\n}`
    },
    testCases: [ { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", expected: "6" }, { input: "[4,2,0,3,2,5]", expected: "9" } ],
    languageIds: { python: 71, javascript: 93, cpp: 54, java: 91 }
  },
  {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    company: "Wipro",
    topics: ["Array", "Binary Search", "Divide and Conquer"],
    description: "Given two sorted arrays `nums1` and `nums2` of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    examples: [ { input: "nums1 = [1,3], nums2 = [2]", output: "2.00000" }, { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.50000"} ],
    constraints: ["`nums1.length == m`", "`nums2.length == n`", "`0 <= m <= 1000`", "`0 <= n <= 1000`", "`1 <= m + n <= 2000`", "`-10^6 <= nums1[i], nums2[i] <= 10^6`"],
    constraints_tip: CONSTRAINTS_TIP,
    starterCode: {
      python: `from typing import List\n\nclass Solution:\n    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\n        # YOUR CODE HERE\n        pass`,
      javascript: `var findMedianSortedArrays = function(nums1, nums2) {\n    // YOUR CODE HERE\n};`,
      cpp: `#include <vector>\n\nclass Solution {\npublic:\n    double findMedianSortedArrays(std::vector<int>& nums1, std::vector<int>& nums2) {\n        // YOUR CODE HERE\n        return 0.0;\n    }\n};`,
      java: `class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // YOUR CODE HERE\n        return 0.0;\n    }\n}`
    },
    driverCode: {
        python: `import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    nums1 = json.loads(lines[0].strip())\n    nums2 = json.loads(lines[1].strip())\n    sol = Solution()\n    result = sol.findMedianSortedArrays(nums1, nums2)\n    print(f'{result:.5f}')`,
        javascript: `// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst nums1 = JSON.parse(lines[0]);\nconst nums2 = JSON.parse(lines[1]);\nconst result = findMedianSortedArrays(nums1, nums2);\nconsole.log(result.toFixed(5));`,
        // ✅ Removed json.hpp; manual parse (two lines)
        cpp: `#include <iostream>\n#include <vector>\n#include <string>\n#include <iomanip>\n\n// __USER_CODE_HERE__\n\nstatic std::vector<int> parseInts(const std::string& line){\n    std::vector<int> v; int x=0; bool in=false,neg=false;\n    for(size_t i=0;i<line.size();++i){char c=line[i];\n        if(c=='-'){neg=true;}\n        else if(c>='0'&&c<='9'){in=true; x=x*10+(c-'0');}\n        else{ if(in){ v.push_back(neg?-x:x); x=0; in=false; neg=false; }}\n    }\n    if(in) v.push_back(neg?-x:x);\n    return v;\n}\n\nint main(){\n    std::string l1,l2; std::getline(std::cin,l1); std::getline(std::cin,l2);\n    std::vector<int> nums1=parseInts(l1), nums2=parseInts(l2);\n    Solution sol; double result=sol.findMedianSortedArrays(nums1,nums2);\n    std::cout<<std::fixed<<std::setprecision(5)<<result<<\"\\n\";\n    return 0;\n}`,
        // ✅ Removed org.json; manual parse (two lines)
        java: `import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main{\n    private static int[] parseInts(String line){\n        List<Integer> list=new ArrayList<>();\n        int x=0; boolean in=false,neg=false;\n        for(int i=0;i<line.length();i++){\n            char c=line.charAt(i);\n            if(c=='-'){neg=true;}\n            else if(Character.isDigit(c)){in=true; x=x*10+(c-'0');}\n            else{ if(in){ list.add(neg?-x:x); x=0; in=false; neg=false; }}\n        }\n        if(in) list.add(neg?-x:x);\n        int[] a=new int[list.size()]; for(int i=0;i<a.length;i++) a[i]=list.get(i);\n        return a;\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        String l1=sc.nextLine();\n        String l2=sc.nextLine();\n        int[] nums1=parseInts(l1);\n        int[] nums2=parseInts(l2);\n        Solution sol=new Solution();\n        double result=sol.findMedianSortedArrays(nums1,nums2);\n        System.out.printf(\"%.5f\\n\", result);\n        sc.close();\n    }\n}`
    },
    testCases: [ { input: "[1,3]\n[2]", expected: "2.00000" }, { input: "[1,2]\n[3,4]", expected: "2.50000" } ],
    languageIds: { python: 71, javascript: 93, cpp: 54, java: 91 }
  },
  {
    id: "word-search",
    title: "Word Search",
    difficulty: "Hard",
    company: "Cognizant",
    topics: ["Array", "Backtracking", "Matrix"],
    description: "Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid`.",
    examples: [ { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true"}],
    constraints: ["`m == board.length`", "`n = board[i].length`", "`1 <= m, n <= 6`", "`1 <= word.length <= 15`"],
    constraints_tip: CONSTRAINTS_TIP,
    starterCode: {
      python: `from typing import List\n\nclass Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        # YOUR CODE HERE\n        pass`,
      javascript: `var exist = function(board, word) {\n    // YOUR CODE HERE\n};`,
      cpp: `#include <vector>\n#include <string>\n\nclass Solution {\npublic:\n    bool exist(std::vector<std::vector<char>>& board, std::string word) {\n        // YOUR CODE HERE\n        return false;\n    }\n};`,
      java: `class Solution {\n    public boolean exist(char[][] board, String word) {\n        // YOUR CODE HERE\n        return false;\n    }\n}`
    },
    driverCode: {
        python: `import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    board = json.loads(lines[0].strip())\n    word = lines[1].strip()\n    sol = Solution()\n    result = sol.exist(board, word)\n    print(str(result).lower())`,
        javascript: `// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst board = JSON.parse(lines[0]);\nconst word = lines[1];\nconst result = exist(board, word);\nconsole.log(result);`,
        // ✅ Removed json.hpp; manual 2D char parse
        cpp: `#include <iostream>\n#include <vector>\n#include <string>\n\n// __USER_CODE_HERE__\n\nstatic std::vector<std::vector<char>> parseBoard(const std::string& line){\n    std::vector<std::vector<char>> board; std::vector<char> row;\n    bool inq=false; char prev=0;\n    for(size_t i=0;i<line.size();++i){\n        char c=line[i];\n        if(c=='\"'){\n            inq=!inq;\n            if(inq && i+1<line.size()){\n                // next char is the letter\n                row.push_back(line[i+1]);\n            }\n        }\n        if(c==']' && !inq){\n            if(!row.empty()){ board.push_back(row); row.clear(); }\n        }\n        prev=c;\n    }\n    return board;\n}\n\nint main(){\n    std::string l1,l2; std::getline(std::cin,l1); std::getline(std::cin,l2);\n    auto board=parseBoard(l1);\n    Solution sol; bool result=sol.exist(board,l2);\n    std::cout<<(result?\"true\":\"false\")<<\"\\n\";\n    return 0;\n}`,
        // ✅ Removed org.json; manual 2D char parse
        java: `import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main{\n    private static char[][] parseBoard(String line){\n        List<List<Character>> rows=new ArrayList<>();\n        List<Character> row=new ArrayList<>();\n        boolean inq=false;\n        for(int i=0;i<line.length();i++){\n            char c=line.charAt(i);\n            if(c=='\"'){\n                inq=!inq;\n                if(inq && i+1<line.length()){\n                    row.add(line.charAt(i+1));\n                }\n            }\n            if(c==']' && !inq){\n                if(!row.isEmpty()){ rows.add(new ArrayList<>(row)); row.clear(); }\n            }\n        }\n        char[][] board=new char[rows.size()][];\n        for(int i=0;i<rows.size();i++){\n            board[i]=new char[rows.get(i).size()];\n            for(int j=0;j<rows.get(i).size();j++) board[i][j]=rows.get(i).get(j);\n        }\n        return board;\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        String l1=sc.nextLine();\n        String word=sc.nextLine();\n        char[][] board=parseBoard(l1);\n        Solution sol=new Solution();\n        boolean result=sol.exist(board,word);\n        System.out.println(result);\n        sc.close();\n    }\n}`
    },
    testCases: [ { input: `[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nABCCED`, expected: "true" }, { input: `[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nSEE`, expected: "true" }, { input: `[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nABCB`, expected: "false" } ],
    languageIds: { python: 71, javascript: 93, cpp: 54, java: 91 }
  },
  {
    "id": "valid-anagram",
    "title": "Valid Anagram",
    "difficulty": "Easy",
    "company": "Cognizant",
    "topics": ["Hash Table", "String", "Sorting"],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    "constraints": ["`1 <= s.length, t.length <= 5 * 10^4`", "`s` and `t` consist of lowercase English letters."],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
        { "input": "s = anagram, t = nagaram", "output": "true" },
        { "input": "s = rat, t = car", "output": "false" }
    ],
    "starterCode": {
      "python": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nvar isAnagram = function(s, t) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <string>\n#include <unordered_map>\n\nclass Solution {\npublic:\n    bool isAnagram(std::string s, std::string t) {\n        // YOUR CODE HERE\n        return false;\n    }\n};",
      "java": "import java.util.HashMap;\n\nclass Solution {\n    public boolean isAnagram(String s, String t) {\n        // YOUR CODE HERE\n        return false;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    s = lines[0].strip()\n    t = lines[1].strip()\n    sol = Solution()\n    result = sol.isAnagram(s, t)\n    print(str(result).lower())",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst s = lines[0];\nconst t = lines[1];\nconst result = isAnagram(s, t);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <string>\n#include <unordered_map>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string s, t;\n    std::cin >> s >> t;\n    Solution sol;\n    bool result = sol.isAnagram(s, t);\n    std::cout << (result ? \"true\" : \"false\") << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        String t = sc.nextLine();\n        Solution sol = new Solution();\n        boolean result = sol.isAnagram(s, t);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [ { "input": "anagram\nnagaram", "expected": "true" }, { "input": "rat\ncar", "expected": "false" } ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "rotate-image",
    "title": "Rotate Image",
    "difficulty": "Medium",
    "company": "Deloitte",
    "topics": ["Array", "Math", "Matrix"],
    "description": "You are given an `n x n` 2D `matrix` representing an image. Rotate the image by 90 degrees (clockwise).\n\nYou have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.",
    "constraints": ["`matrix.length == n`", "`matrix[i].length == n`", "`1 <= n <= 20`", "`-1000 <= matrix[i][j] <= 1000`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]", "output": "[[7,4,1],[8,5,2],[9,6,3]]" }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        \"\"\"\n        Do not return anything, modify matrix in-place instead.\n        \"\"\"\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar rotate = function(matrix) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n#include <algorithm>\n\nclass Solution {\npublic:\n    void rotate(std::vector<std::vector<int>>& matrix) {\n        // YOUR CODE HERE\n    }\n};",
      "java": "class Solution {\n    public void rotate(int[][] matrix) {\n        // YOUR CODE HERE\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    matrix = json.loads(sys.stdin.readline().strip())\n    sol = Solution()\n    sol.rotate(matrix)\n    print(json.dumps(matrix, separators=(',',':')))",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst matrix = JSON.parse(fs.readFileSync(0, 'utf-8').trim());\nrotate(matrix);\nconsole.log(JSON.stringify(matrix));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n\n// __USER_CODE_HERE__\n\n// Basic parser for 2D int array from JSON string\nstatic std::vector<std::vector<int>> parseMatrix(const std::string& line) {\n    std::vector<std::vector<int>> matrix;\n    std::vector<int> row;\n    int current_number = 0;\n    bool is_negative = false;\n    bool in_number = false;\n    for (char c : line) {\n        if (c >= '0' && c <= '9') {\n            current_number = current_number * 10 + (c - '0');\n            in_number = true;\n        } else if (c == '-') {\n            is_negative = true;\n        } else {\n            if (in_number) {\n                row.push_back(is_negative ? -current_number : current_number);\n                current_number = 0;\n                is_negative = false;\n                in_number = false;\n            }\n            if (c == ']') {\n                if (!row.empty()) {\n                    matrix.push_back(row);\n                    row.clear();\n                }\n            }\n        }\n    }\n    return matrix;\n}\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    auto matrix = parseMatrix(line);\n    Solution sol;\n    sol.rotate(matrix);\n    std::cout << \"[\";\n    for (size_t i = 0; i < matrix.size(); ++i) {\n        std::cout << \"[\";\n        for (size_t j = 0; j < matrix[i].size(); ++j) {\n            std::cout << matrix[i][j] << (j == matrix[i].size() - 1 ? \"\" : \",\");\n        }\n        std::cout << \"]\" << (i == matrix.size() - 1 ? \"\" : \",\");\n    }\n    std::cout << \"]\" << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\nimport com.google.gson.Gson;\nimport com.google.gson.reflect.TypeToken;\nimport java.lang.reflect.Type;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        \n        Gson gson = new Gson();\n        Type type = new TypeToken<int[][]>(){}.getType();\n        int[][] matrix = gson.fromJson(line, type);\n        \n        Solution sol = new Solution();\n        sol.rotate(matrix);\n        \n        System.out.println(gson.toJson(matrix).replaceAll(\"\\\\s\", \"\"));\n        sc.close();\n    }\n}"
    },
    "testCases": [ { "input": "[[1,2,3],[4,5,6],[7,8,9]]", "expected": "[[7,4,1],[8,5,2],[9,6,3]]" }, { "input": "[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", "expected": "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]" } ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "largest-rectangle-in-histogram",
    "title": "Largest Rectangle in Histogram",
    "difficulty": "Hard",
    "company": "Wipro",
    "topics": ["Array", "Stack", "Monotonic Stack"],
    "description": "Given an array of integers `heights` representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    "constraints": ["`1 <= heights.length <= 10^5`", "`0 <= heights[i] <= 10^4`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "heights = [2,1,5,6,2,3]", "output": "10", "explanation": "The largest rectangle is shown in the red area, which has an area of 10 units." }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number[]} heights\n * @return {number}\n */\nvar largestRectangleArea = function(heights) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n#include <stack>\n\nclass Solution {\npublic:\n    int largestRectangleArea(std::vector<int>& heights) {\n        // YOUR CODE HERE\n        return 0;\n    }\n};",
      "java": "import java.util.Stack;\n\nclass Solution {\n    public int largestRectangleArea(int[] heights) {\n        // YOUR CODE HERE\n        return 0;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    heights = json.loads(sys.stdin.readline().strip())\n    sol = Solution()\n    result = sol.largestRectangleArea(heights)\n    print(result)",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst heights = JSON.parse(fs.readFileSync(0, 'utf-8').trim());\nconst result = largestRectangleArea(heights);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <stack>\n\n// __USER_CODE_HERE__\n\nstatic std::vector<int> parseInts(const std::string& line){\n    std::vector<int> v; int x=0; bool in=false,neg=false;\n    for(size_t i=0;i<line.size();++i){char c=line[i];\n        if(c=='-'){neg=true;}\n        else if(c>='0'&&c<='9'){in=true; x=x*10+(c-'0');}\n        else{ if(in){ v.push_back(neg?-x:x); x=0; in=false; neg=false; }}\n    }\n    if(in) v.push_back(neg?-x:x);\n    return v;\n}\n\nint main(){\n    std::string line; std::getline(std::cin,line);\n    std::vector<int> heights=parseInts(line);\n    Solution sol; int result=sol.largestRectangleArea(heights);\n    std::cout<<result<<\"\\n\";\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main{\n    private static int[] parseInts(String line){\n        List<Integer> list=new ArrayList<>();\n        int x=0; boolean in=false,neg=false;\n        for(int i=0;i<line.length();i++){\n            char c=line.charAt(i);\n            if(c=='-'){neg=true;}\n            else if(Character.isDigit(c)){in=true; x=x*10+(c-'0');}\n            else{ if(in){ list.add(neg?-x:x); x=0; in=false; neg=false; }}\n        }\n        if(in) list.add(neg?-x:x);\n        int[] a=new int[list.size()]; for(int i=0;i<a.length;i++) a[i]=list.get(i);\n        return a;\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        String line=sc.nextLine();\n        int[] heights=parseInts(line);\n        Solution sol=new Solution();\n        int result=sol.largestRectangleArea(heights);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [ { "input": "[2,1,5,6,2,3]", "expected": "10" }, { "input": "[2,4]", "expected": "4" } ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "merge-k-sorted-lists",
    "title": "Merge k Sorted Lists",
    "difficulty": "Hard",
    "company": "Accenture",
    "topics": ["Linked List", "Priority Queue", "Heap", "Divide and Conquer"],
    "description": "You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.\n\nMerge all the linked-lists into one sorted linked-list and return it.",
    "constraints": ["`k == lists.length`", "`0 <= k <= 10^4`", "`0 <= lists[i].length <= 500`", "`-10^4 <= lists[i][j] <= 10^4`", "The sum of `lists[i].length` will not exceed `10^4`."],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "lists = [[1,4,5],[1,3,4],[2,6]]", "output": "[1,1,2,3,4,4,5,6]" }
    ],
    "starterCode": {
      "python": "from typing import List, Optional\n\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\nclass Solution:\n    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n        # YOUR CODE HERE\n        pass",
      "javascript": "function ListNode(val, next) {\n    this.val = (val===undefined ? 0 : val)\n    this.next = (next===undefined ? null : next)\n}\n/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nvar mergeKLists = function(lists) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n\nstruct ListNode {\n    int val;\n    ListNode *next;\n    ListNode() : val(0), next(nullptr) {}\n    ListNode(int x) : val(x), next(nullptr) {}\n    ListNode(int x, ListNode *next) : val(x), next(next) {}\n};\n\nclass Solution {\npublic:\n    ListNode* mergeKLists(std::vector<ListNode*>& lists) {\n        // YOUR CODE HERE\n        return nullptr;\n    }\n};",
      "java": "import java.util.PriorityQueue;\n\nclass ListNode {\n    int val;\n    ListNode next;\n    ListNode() {}\n    ListNode(int val) { this.val = val; }\n    ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n}\n\nclass Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        // YOUR CODE HERE\n        return null;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List, Optional\n\n# __USER_CODE_HERE__\n\ndef build_list(arr):\n    if not arr: return None\n    head = ListNode(arr[0])\n    curr = head\n    for i in range(1, len(arr)):\n        curr.next = ListNode(arr[i])\n        curr = curr.next\n    return head\n\ndef list_to_array(head):\n    arr = []\n    curr = head\n    while curr:\n        arr.append(curr.val)\n        curr = curr.next\n    return arr\n\nif __name__ == '__main__':\n    data = json.loads(sys.stdin.readline().strip())\n    lists = [build_list(arr) for arr in data]\n    sol = Solution()\n    result_head = sol.mergeKLists(lists)\n    result_arr = list_to_array(result_head)\n    print(json.dumps(result_arr, separators=(',',':')))",
        "javascript": "// __USER_CODE_HERE__\n\nfunction buildList(arr) {\n    if (!arr.length) return null;\n    let head = new ListNode(arr[0]);\n    let curr = head;\n    for (let i = 1; i < arr.length; i++) {\n        curr.next = new ListNode(arr[i]);\n        curr = curr.next;\n    }\n    return head;\n}\n\nfunction listToArray(head) {\n    let arr = [];\n    let curr = head;\n    while (curr) {\n        arr.push(curr.val);\n        curr = curr.next;\n    }\n    return arr;\n}\n\nconst fs = require('fs');\nconst data = JSON.parse(fs.readFileSync(0, 'utf-8').trim());\nconst lists = data.map(buildList);\nconst resultHead = mergeKLists(lists);\nconst resultArr = listToArray(resultHead);\nconsole.log(JSON.stringify(resultArr));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n\n// __USER_CODE_HERE__\n\n// Basic parser for 2D int array from JSON string\nstatic std::vector<std::vector<int>> parseMatrix(const std::string& line) {\n    std::vector<std::vector<int>> matrix;\n    std::vector<int> row;\n    int current_number = 0;\n    bool is_negative = false;\n    bool in_number = false;\n    for (char c : line) {\n        if (c >= '0' && c <= '9') {\n            current_number = current_number * 10 + (c - '0');\n            in_number = true;\n        } else if (c == '-') {\n            is_negative = true;\n        } else {\n            if (in_number) {\n                row.push_back(is_negative ? -current_number : current_number);\n                current_number = 0;\n                is_negative = false;\n                in_number = false;\n            }\n            if (c == ']') {\n                if (!row.empty() || (line.find(\"[]\") != std::string::npos && (matrix.empty() || !matrix.back().empty()))){\n                     matrix.push_back(row);\n                     row.clear();\n                }\n            }\n        }\n    }\n    return matrix;\n}\n\nListNode* buildList(const std::vector<int>& arr) {\n    if (arr.empty()) return nullptr;\n    ListNode* head = new ListNode(arr[0]);\n    ListNode* curr = head;\n    for (size_t i = 1; i < arr.size(); ++i) {\n        curr->next = new ListNode(arr[i]);\n        curr = curr->next;\n    }\n    return head;\n}\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    auto data = parseMatrix(line);\n    std::vector<ListNode*> lists;\n    for(const auto& arr : data) {\n        lists.push_back(buildList(arr));\n    }\n    Solution sol;\n    ListNode* result_head = sol.mergeKLists(lists);\n    std::cout << \"[\";\n    ListNode* curr = result_head;\n    while (curr) {\n        std::cout << curr->val;\n        if (curr->next) std::cout << \",\";\n        curr = curr->next;\n    }\n    std::cout << \"]\" << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\nimport com.google.gson.Gson;\nimport com.google.gson.reflect.TypeToken;\nimport java.lang.reflect.Type;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static ListNode buildList(List<Integer> arr) {\n        if (arr == null || arr.isEmpty()) return null;\n        ListNode head = new ListNode(arr.get(0));\n        ListNode curr = head;\n        for (int i = 1; i < arr.size(); i++) {\n            curr.next = new ListNode(arr.get(i));\n            curr = curr.next;\n        }\n        return head;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        \n        Gson gson = new Gson();\n        Type type = new TypeToken<List<List<Integer>>>(){}.getType();\n        List<List<Integer>> data = gson.fromJson(line, type);\n        \n        ListNode[] lists = new ListNode[data.size()];\n        for (int i = 0; i < data.size(); i++) {\n            lists[i] = buildList(data.get(i));\n        }\n\n        Solution sol = new Solution();\n        ListNode resultHead = sol.mergeKLists(lists);\n        \n        List<Integer> resultArr = new ArrayList<>();\n        ListNode curr = resultHead;\n        while (curr != null) {\n            resultArr.add(curr.val);\n            curr = curr.next;\n        }\n        System.out.println(gson.toJson(resultArr).replaceAll(\"\\\\s\", \"\"));\n        sc.close();\n    }\n}"
    },
    "testCases": [ { "input": "[[1,4,5],[1,3,4],[2,6]]", "expected": "[1,1,2,3,4,4,5,6]" }, { "input": "[]", "expected": "[]" }, { "input": "[[]]", "expected": "[]" } ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "regular-expression-matching",
    "title": "Regular Expression Matching",
    "difficulty": "Hard",
    "company": "Cognizant",
    "topics": ["String", "Dynamic Programming", "Recursion"],
    "description": "Given an input string `s` and a pattern `p`, implement regular expression matching with support for `.` and `*`.\n\n- `.` Matches any single character.\n- `*` Matches zero or more of the preceding element.\n\nThe matching should cover the **entire** input string (not partial).",
    "constraints": ["`1 <= s.length <= 20`", "`1 <= p.length <= 20`", "`s` contains only lowercase English letters.", "`p` contains only lowercase English letters, `.` and `*`.", "It is guaranteed for each appearance of the character `*`, there will be a previous valid character to match."],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "s = aa, p = a", "output": "false", "explanation": "'a' does not match the entire string 'aa'." },
      { "input": "s = aa, p = a*", "output": "true", "explanation": "'*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes 'aa'." },
      { "input": "s = ab, p = .*", "output": "true", "explanation": "'.*' means 'zero or more of any character'." }
    ],
    "starterCode": {
      "python": "class Solution:\n    def isMatch(self, s: str, p: str) -> bool:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {string} s\n * @param {string} p\n * @return {boolean}\n */\nvar isMatch = function(s, p) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <string>\n#include <vector>\n\nclass Solution {\npublic:\n    bool isMatch(std::string s, std::string p) {\n        // YOUR CODE HERE\n        return false;\n    }\n};",
      "java": "class Solution {\n    public boolean isMatch(String s, String p) {\n        // YOUR CODE HERE\n        return false;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    s = lines[0].strip()\n    p = lines[1].strip()\n    sol = Solution()\n    result = sol.isMatch(s, p)\n    print(str(result).lower())",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst s = lines[0];\nconst p = lines[1];\nconst result = isMatch(s, p);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <string>\n#include <vector>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string s, p;\n    std::cin >> s >> p;\n    Solution sol;\n    bool result = sol.isMatch(s, p);\n    std::cout << (result ? \"true\" : \"false\") << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        String p = sc.nextLine();\n        Solution sol = new Solution();\n        boolean result = sol.isMatch(s, p);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [ { "input": "aa\na", "expected": "false" }, { "input": "aa\na*", "expected": "true" }, { "input": "ab\n.*", "expected": "true" }, { "input": "mississippi\nmis*is*p*.", "expected": "false" } ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "contains-duplicate",
    "title": "Contains Duplicate",
    "difficulty": "Easy",
    "company": "Infosys",
    "topics": ["Array", "Hash Table", "Set"],
    "description": "Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.",
    "constraints": ["`1 <= nums.length <= 10^5`", "`-10^9 <= nums[i] <= 10^9`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "nums = [1,2,3,1]", "output": "true" },
      { "input": "nums = [1,2,3,4]", "output": "false" }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar containsDuplicate = function(nums) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n#include <unordered_set>\n\nclass Solution {\npublic:\n    bool containsDuplicate(std::vector<int>& nums) {\n        // YOUR CODE HERE\n        return false;\n    }\n};",
      "java": "import java.util.HashSet;\nimport java.util.Set;\n\nclass Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // YOUR CODE HERE\n        return false;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    line = sys.stdin.readline().strip()\n    nums = list(map(int, line.split())) if line else []\n    sol = Solution()\n    result = sol.containsDuplicate(nums)\n    print(str(result).lower())",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nums = input ? input.split(' ').map(Number) : [];\nconst result = containsDuplicate(nums);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <unordered_set>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    std::stringstream ss(line);\n    std::vector<int> nums;\n    int num;\n    while (ss >> num) { nums.push_back(num); }\n\n    Solution sol;\n    bool result = sol.containsDuplicate(nums);\n    std::cout << (result ? \"true\" : \"false\") << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        String[] numsStr = line.isEmpty() ? new String[0] : line.split(\" \");\n        int[] nums = new int[numsStr.length];\n        for (int i = 0; i < numsStr.length; i++) {\n            nums[i] = Integer.parseInt(numsStr[i]);\n        }\n\n        Solution sol = new Solution();\n        boolean result = sol.containsDuplicate(nums);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "1 2 3 1", "expected": "true" },
      { "input": "1 2 3 4", "expected": "false" },
      { "input": "1 1 1 3 3 4 3 2 4 2", "expected": "true" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "climbing-stairs",
    "title": "Climbing Stairs",
    "difficulty": "Easy",
    "company": "TCS",
    "topics": ["Dynamic Programming", "Math"],
    "description": "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    "constraints": ["`1 <= n <= 45`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "n = 2", "output": "2", "explanation": "There are two ways to climb to the top.\n1. 1 step + 1 step\n2. 2 steps" },
      { "input": "n = 3", "output": "3", "explanation": "There are three ways to climb to the top.\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step" }
    ],
    "starterCode": {
      "python": "class Solution:\n    def climbStairs(self, n: int) -> int:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nvar climbStairs = function(n) {\n    // YOUR CODE HERE\n};",
      "cpp": "class Solution {\npublic:\n    int climbStairs(int n) {\n        // YOUR CODE HERE\n        return 0;\n    }\n};",
      "java": "class Solution {\n    public int climbStairs(int n) {\n        // YOUR CODE HERE\n        return 0;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    n = int(sys.stdin.readline().strip())\n    sol = Solution()\n    result = sol.climbStairs(n)\n    print(result)",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nconst result = climbStairs(n);\nconsole.log(result);",
        "cpp": "#include <iostream>\n\n// __USER_CODE_HERE__\n\nint main() {\n    int n;\n    std::cin >> n;\n    Solution sol;\n    int result = sol.climbStairs(n);\n    std::cout << result << std::endl;\n    return 0;\n}",
        "java": "import java.util.Scanner;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        int result = sol.climbStairs(n);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "2", "expected": "2" },
      { "input": "3", "expected": "3" },
      { "input": "5", "expected": "8" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "binary-tree-level-order-traversal",
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "company": "ZS Associates",
    "topics": ["Tree", "Breadth-First Search", "Queue"],
    "description": "Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    "constraints": ["The number of nodes in the tree is in the range `[0, 2000]`.", "`-1000 <= Node.val <= 1000`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "root = [3,9,20,null,null,15,7]", "output": "[[3],[9,20],[15,7]]" }
    ],
    "starterCode": {
        "python": "from typing import List, Optional\n\n# Definition for a binary tree node.\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        # YOUR CODE HERE\n        pass",
        "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n * this.val = (val===undefined ? 0 : val)\n * this.left = (left===undefined ? null : left)\n * this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar levelOrder = function(root) {\n    // YOUR CODE HERE\n};",
        "cpp": "#include <vector>\n#include <queue>\n\n// Definition for a binary tree node.\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode() : val(0), left(nullptr), right(nullptr) {}\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n};\n\nclass Solution {\npublic:\n    std::vector<std::vector<int>> levelOrder(TreeNode* root) {\n        // YOUR CODE HERE\n        return {};\n    }\n};",
        "java": "import java.util.*;\n\n// Definition for a binary tree node.\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        // YOUR CODE HERE\n        return new ArrayList<>();\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom collections import deque\nfrom typing import Optional, List\n\n# __USER_CODE_HERE__\n\ndef build_tree(nodes_str: List[str]) -> Optional[TreeNode]:\n    if not nodes_str or nodes_str[0] == 'null':\n        return None\n    \n    nodes = [None if s == 'null' else TreeNode(int(s)) for s in nodes_str]\n    root = nodes[0]\n    queue = deque([root])\n    i = 1\n    while queue and i < len(nodes):\n        node = queue.popleft()\n        if i < len(nodes) and nodes[i] is not None:\n            node.left = nodes[i]\n            queue.append(node.left)\n        i += 1\n        if i < len(nodes) and nodes[i] is not None:\n            node.right = nodes[i]\n            queue.append(node.right)\n        i += 1\n    return root\n\nif __name__ == '__main__':\n    line = sys.stdin.readline().strip()\n    nodes_str = line.split() if line else []\n    root = build_tree(nodes_str)\n    \n    sol = Solution()\n    result = sol.levelOrder(root)\n    print(json.dumps(result, separators=(',', ':')))",
        "javascript": "function TreeNode(val, left, right) {\n    this.val = (val===undefined ? 0 : val);\n    this.left = (left===undefined ? null : left);\n    this.right = (right===undefined ? null : right);\n}\n\n// __USER_CODE_HERE__\n\nfunction buildTree(nodesStr) {\n    if (!nodesStr.length || nodesStr[0] === 'null') return null;\n    \n    const nodes = nodesStr.map(s => s === 'null' ? null : new TreeNode(Number(s)));\n    const root = nodes[0];\n    const queue = [root];\n    let i = 1;\n    while (queue.length > 0 && i < nodes.length) {\n        const node = queue.shift();\n        if (i < nodes.length && nodes[i] !== null) {\n            node.left = nodes[i];\n            queue.push(node.left);\n        }\n        i++;\n        if (i < nodes.length && nodes[i] !== null) {\n            node.right = nodes[i];\n            queue.push(node.right);\n        }\n        i++;\n    }\n    return root;\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nodesStr = input ? input.split(' ') : [];\n\nconst root = buildTree(nodesStr);\nconst result = levelOrder(root);\nconsole.log(JSON.stringify(result));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <queue>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nTreeNode* buildTree(const std::vector<std::string>& nodes_str) {\n    if (nodes_str.empty() || nodes_str[0] == \"null\") {\n        return nullptr;\n    }\n\n    std::vector<TreeNode*> nodes;\n    for (const auto& s : nodes_str) {\n        if (s == \"null\") {\n            nodes.push_back(nullptr);\n        } else {\n            nodes.push_back(new TreeNode(std::stoi(s)));\n        }\n    }\n\n    TreeNode* root = nodes[0];\n    std::queue<TreeNode*> q;\n    q.push(root);\n    int i = 1;\n    while (!q.empty() && i < nodes.size()) {\n        TreeNode* node = q.front();\n        q.pop();\n        if (i < nodes.size() && nodes[i] != nullptr) {\n            node->left = nodes[i];\n            q.push(node->left);\n        }\n        i++;\n        if (i < nodes.size() && nodes[i] != nullptr) {\n            node->right = nodes[i];\n            q.push(node->right);\n        }\n        i++;\n    }\n    return root;\n}\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    std::stringstream ss(line);\n    std::string s;\n    std::vector<std::string> nodes_str;\n    while (ss >> s) { nodes_str.push_back(s); }\n\n    TreeNode* root = buildTree(nodes_str);\n\n    Solution sol;\n    std::vector<std::vector<int>> result = sol.levelOrder(root);\n    \n    std::cout << \"[\";\n    for (size_t i = 0; i < result.size(); ++i) {\n        std::cout << \"[\";\n        for (size_t j = 0; j < result[i].size(); ++j) {\n            std::cout << result[i][j] << (j == result[i].size() - 1 ? \"\" : \",\");\n        }\n        std::cout << \"]\" << (i == result.size() - 1 ? \"\" : \",\");\n    }\n    std::cout << \"]\" << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\nimport com.google.gson.Gson;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static TreeNode buildTree(String[] nodesStr) {\n        if (nodesStr.length == 0 || nodesStr[0].equals(\"null\")) {\n            return null;\n        }\n\n        TreeNode[] nodes = new TreeNode[nodesStr.length];\n        for (int i = 0; i < nodesStr.length; i++) {\n            if (!nodesStr[i].equals(\"null\")) {\n                nodes[i] = new TreeNode(Integer.parseInt(nodesStr[i]));\n            }\n        }\n\n        TreeNode root = nodes[0];\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        int i = 1;\n        while (!q.isEmpty() && i < nodes.length) {\n            TreeNode node = q.poll();\n            if (i < nodes.length && nodes[i] != null) {\n                node.left = nodes[i];\n                q.add(node.left);\n            }\n            i++;\n            if (i < nodes.length && nodes[i] != null) {\n                node.right = nodes[i];\n                q.add(node.right);\n            }\n            i++;\n        }\n        return root;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        String[] nodesStr = line.isEmpty() ? new String[0] : line.split(\" \");\n        TreeNode root = buildTree(nodesStr);\n\n        Solution sol = new Solution();\n        List<List<Integer>> result = sol.levelOrder(root);\n        \n        Gson gson = new Gson();\n        System.out.println(gson.toJson(result).replaceAll(\"\\\\s\", \"\"));\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "3 9 20 null null 15 7", "expected": "[[3],[9,20],[15,7]]" },
      { "input": "1", "expected": "[[1]]" },
      { "input": "", "expected": "[]" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "coin-change",
    "title": "Coin Change",
    "difficulty": "Medium",
    "company": "Capgemini",
    "topics": ["Dynamic Programming", "Array"],
    "description": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.",
    "constraints": ["`1 <= coins.length <= 12`", "`1 <= coins[i] <= 2^31 - 1`", "`0 <= amount <= 10^4`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "coins = [1,2,5], amount = 11", "output": "3", "explanation": "11 = 5 + 5 + 1" },
      { "input": "coins = [2], amount = 3", "output": "-1" }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number[]} coins\n * @param {number} amount\n * @return {number}\n */\nvar coinChange = function(coins, amount) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n#include <algorithm>\n\nclass Solution {\npublic:\n    int coinChange(std::vector<int>& coins, int amount) {\n        // YOUR CODE HERE\n        return 0;\n    }\n};",
      "java": "import java.util.Arrays;\n\nclass Solution {\n    public int coinChange(int[] coins, int amount) {\n        // YOUR CODE HERE\n        return 0;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    coins = list(map(int, lines[0].strip().split()))\n    amount = int(lines[1].strip())\n    \n    sol = Solution()\n    result = sol.coinChange(coins, amount)\n    print(result)",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst coins = input[0].split(' ').map(Number);\nconst amount = Number(input[1]);\nconst result = coinChange(coins, amount);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line1, line2;\n    std::getline(std::cin, line1);\n    std::getline(std::cin, line2);\n\n    std::stringstream ss(line1);\n    std::vector<int> coins;\n    int num;\n    while (ss >> num) { coins.push_back(num); }\n    int amount = std::stoi(line2);\n\n    Solution sol;\n    int result = sol.coinChange(coins, amount);\n    std::cout << result << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] coinsStr = sc.nextLine().split(\" \");\n        int[] coins = new int[coinsStr.length];\n        for (int i = 0; i < coinsStr.length; i++) {\n            coins[i] = Integer.parseInt(coinsStr[i]);\n        }\n        int amount = sc.nextInt();\n\n        Solution sol = new Solution();\n        int result = sol.coinChange(coins, amount);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "1 2 5\n11", "expected": "3" },
      { "input": "2\n3", "expected": "-1" },
      { "input": "1\n0", "expected": "0" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "sliding-window-maximum",
    "title": "Sliding Window Maximum",
    "difficulty": "Hard",
    "company": "IBM",
    "topics": ["Array", "Sliding Window", "Queue", "Monotonic Queue"],
    "description": "You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.\n\nReturn the max sliding window.",
    "constraints": ["`1 <= nums.length <= 10^5`", "`-10^4 <= nums[i] <= 10^4`", "`1 <= k <= nums.length`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3", "output": "[3,3,5,5,6,7]" }
    ],
    "starterCode": {
      "python": "from typing import List\nimport collections\n\nclass Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number[]}\n */\nvar maxSlidingWindow = function(nums, k) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n#include <deque>\n\nclass Solution {\npublic:\n    std::vector<int> maxSlidingWindow(std::vector<int>& nums, int k) {\n        // YOUR CODE HERE\n        return {};\n    }\n};",
      "java": "import java.util.ArrayDeque;\nimport java.util.Deque;\n\nclass Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // YOUR CODE HERE\n        return new int[0];\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\nimport collections\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    nums = list(map(int, lines[0].strip().split()))\n    k = int(lines[1].strip())\n    \n    sol = Solution()\n    result = sol.maxSlidingWindow(nums, k)\n    print(json.dumps(result, separators=(',', ':')))",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst nums = input[0].split(' ').map(Number);\nconst k = Number(input[1]);\nconst result = maxSlidingWindow(nums, k);\nconsole.log(JSON.stringify(result));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <deque>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line1, line2;\n    std::getline(std::cin, line1);\n    std::getline(std::cin, line2);\n\n    std::stringstream ss(line1);\n    std::vector<int> nums;\n    int num;\n    while (ss >> num) { nums.push_back(num); }\n    int k = std::stoi(line2);\n\n    Solution sol;\n    std::vector<int> result = sol.maxSlidingWindow(nums, k);\n\n    std::cout << \"[\";\n    for (size_t i = 0; i < result.size(); ++i) {\n        std::cout << result[i] << (i == result.size() - 1 ? \"\" : \",\");\n    }\n    std::cout << \"]\" << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] numsStr = sc.nextLine().split(\" \");\n        int[] nums = new int[numsStr.length];\n        for (int i = 0; i < numsStr.length; i++) {\n            nums[i] = Integer.parseInt(numsStr[i]);\n        }\n        int k = sc.nextInt();\n\n        Solution sol = new Solution();\n        int[] result = sol.maxSlidingWindow(nums, k);\n        System.out.println(Arrays.toString(result).replaceAll(\" \", \"\"));\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "1 3 -1 -3 5 3 6 7\n3", "expected": "[3,3,5,5,6,7]" },
      { "input": "1\n1", "expected": "[1]" },
      { "input": "1 -1\n1", "expected": "[1,-1]" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "best-time-to-buy-and-sell-stock",
    "title": "Best Time to Buy and Sell Stock",
    "difficulty": "Easy",
    "company": "HSBC",
    "topics": ["Array", "Dynamic Programming"],
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.\n\nYou want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    "constraints": ["`1 <= prices.length <= 10^5`", "`0 <= prices[i] <= 10^4`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "prices = [7,1,5,3,6,4]", "output": "5", "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5." },
      { "input": "prices = [7,6,4,3,1]", "output": "0", "explanation": "In this case, no transactions are done and the max profit = 0." }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function(prices) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n#include <algorithm>\n\nclass Solution {\npublic:\n    int maxProfit(std::vector<int>& prices) {\n        // YOUR CODE HERE\n        return 0;\n    }\n};",
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        // YOUR CODE HERE\n        return 0;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    line = sys.stdin.readline().strip()\n    prices = list(map(int, line.split())) if line else []\n    sol = Solution()\n    result = sol.maxProfit(prices)\n    print(result)",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst prices = input ? input.split(' ').map(Number) : [];\nconst result = maxProfit(prices);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    std::stringstream ss(line);\n    std::vector<int> prices;\n    int num;\n    while (ss >> num) { prices.push_back(num); }\n\n    Solution sol;\n    int result = sol.maxProfit(prices);\n    std::cout << result << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        String[] pricesStr = line.isEmpty() ? new String[0] : line.split(\" \");\n        int[] prices = new int[pricesStr.length];\n        for (int i = 0; i < pricesStr.length; i++) {\n            prices[i] = Integer.parseInt(pricesStr[i]);\n        }\n\n        Solution sol = new Solution();\n        int result = sol.maxProfit(prices);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "7 1 5 3 6 4", "expected": "5" },
      { "input": "7 6 4 3 1", "expected": "0" },
      { "input": "1 2 3 4 5", "expected": "4" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "linked-list-cycle",
    "title": "Linked List Cycle",
    "difficulty": "Easy",
    "company": "Oracle Financial",
    "topics": ["Linked List", "Two Pointers", "Hash Table"],
    "description": "Given `head`, the head of a linked list, determine if the linked list has a cycle in it.\n\nThere is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.",
    "constraints": ["The number of nodes in the list is in the range `[0, 10^4]`.", "`-10^5 <= Node.val <= 10^5`", "`pos` is `-1` or a valid index in the linked list."],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "head = [3,2,0,-4], pos = 1", "output": "true", "explanation": "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)." }
    ],
    "starterCode": {
        "python": "from typing import Optional\n\n# Definition for singly-linked list.\nclass ListNode:\n    def __init__(self, x):\n        self.val = x\n        self.next = None\n\nclass Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        # YOUR CODE HERE\n        pass",
        "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n * this.val = val;\n * this.next = null;\n * }\n */\n\n/**\n * @param {ListNode} head\n * @return {boolean}\n */\nvar hasCycle = function(head) {\n    // YOUR CODE HERE\n};",
        "cpp": "// Definition for singly-linked list.\nstruct ListNode {\n    int val;\n    ListNode *next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n\nclass Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        // YOUR CODE HERE\n        return false;\n    }\n};",
        "java": "// Definition for singly-linked list.\nclass ListNode {\n    int val;\n    ListNode next;\n    ListNode(int x) {\n        val = x;\n        next = null;\n    }\n}\n\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        // YOUR CODE HERE\n        return false;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nfrom typing import Optional\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    if not lines:\n        print(\"false\")\n        sys.exit(0)\n\n    nodes_val = list(map(int, lines[0].strip().split()))\n    pos = int(lines[1].strip())\n    \n    if not nodes_val:\n        print(\"false\")\n        sys.exit(0)\n\n    head = ListNode(nodes_val[0])\n    current = head\n    nodes = [head]\n    for val in nodes_val[1:]:\n        current.next = ListNode(val)\n        current = current.next\n        nodes.append(current)\n    \n    if pos != -1 and pos < len(nodes):\n        current.next = nodes[pos]\n    \n    sol = Solution()\n    result = sol.hasCycle(head)\n    print(str(result).lower())",
        "javascript": "function ListNode(val) {\n    this.val = val;\n    this.next = null;\n}\n\n// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (!input[0]) {\n    console.log(false);\n    process.exit(0);\n}\n\nconst nodes_val = input[0].split(' ').map(Number);\nconst pos = Number(input[1]);\n\nif (!nodes_val.length) {\n    console.log(false);\n    process.exit(0);\n}\n\nlet head = new ListNode(nodes_val[0]);\nlet current = head;\nlet nodes = [head];\nfor (let i = 1; i < nodes_val.length; i++) {\n    current.next = new ListNode(nodes_val[i]);\n    current = current.next;\n    nodes.push(current);\n}\n\nif (pos !== -1 && pos < nodes.length) {\n    current.next = nodes[pos];\n}\n\nconst result = hasCycle(head);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line1, line2;\n    if (!std::getline(std::cin, line1)) {\n        std::cout << \"false\" << std::endl;\n        return 0;\n    }\n    if (!std::getline(std::cin, line2)) {\n        std::cout << \"false\" << std::endl;\n        return 0;\n    }\n\n    std::stringstream ss(line1);\n    std::vector<int> nodes_val;\n    int num;\n    while (ss >> num) { nodes_val.push_back(num); }\n    int pos = std::stoi(line2);\n\n    if (nodes_val.empty()) {\n        std::cout << \"false\" << std::endl;\n        return 0;\n    }\n\n    ListNode* head = new ListNode(nodes_val[0]);\n    ListNode* current = head;\n    std::vector<ListNode*> nodes = {head};\n    for (size_t i = 1; i < nodes_val.size(); ++i) {\n        current->next = new ListNode(nodes_val[i]);\n        current = current->next;\n        nodes.push_back(current);\n    }\n\n    if (pos != -1 && pos < nodes.size()) {\n        current->next = nodes[pos];\n    }\n\n    Solution sol;\n    bool result = sol.hasCycle(head);\n    std::cout << (result ? \"true\" : \"false\") << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) {\n            System.out.println(false);\n            sc.close();\n            return;\n        }\n        String line1 = sc.nextLine();\n        if (!sc.hasNextLine()) {\n            System.out.println(false);\n            sc.close();\n            return;\n        }\n        int pos = sc.nextInt();\n        String[] nodesStr = line1.isEmpty() ? new String[0] : line1.split(\" \");\n        \n        if (nodesStr.length == 0) {\n            System.out.println(false);\n            sc.close();\n            return;\n        }\n\n        ListNode head = new ListNode(Integer.parseInt(nodesStr[0]));\n        ListNode current = head;\n        List<ListNode> nodes = new ArrayList<>();\n        nodes.add(head);\n\n        for (int i = 1; i < nodesStr.length; i++) {\n            current.next = new ListNode(Integer.parseInt(nodesStr[i]));\n            current = current.next;\n            nodes.add(current);\n        }\n\n        if (pos != -1 && pos < nodes.size()) {\n            current.next = nodes.get(pos);\n        }\n\n        Solution sol = new Solution();\n        boolean result = sol.hasCycle(head);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "3 2 0 -4\n1", "expected": "true" },
      { "input": "1 2\n0", "expected": "true" },
      { "input": "1\n-1", "expected": "false" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "longest-palindromic-substring",
    "title": "Longest Palindromic Substring",
    "difficulty": "Medium",
    "company": "LTI Mindtree",
    "topics": ["String", "Dynamic Programming", "Two Pointers"],
    "description": "Given a string `s`, return the longest palindromic substring in `s`.",
    "constraints": ["`1 <= s.length <= 1000`", "`s` consist of only digits and English letters."],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "s = badad", "output": "ada" },
      { "input": "s = cbbd", "output": "bb" }
    ],
    "starterCode": {
      "python": "class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {string} s\n * @return {string}\n */\nvar longestPalindrome = function(s) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <string>\n\nclass Solution {\npublic:\n    std::string longestPalindrome(std::string s) {\n        // YOUR CODE HERE\n        return \"\";\n    }\n};",
      "java": "class Solution {\n    public String longestPalindrome(String s) {\n        // YOUR CODE HERE\n        return \"\";\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    s = sys.stdin.readline().strip()\n    sol = Solution()\n    result = sol.longestPalindrome(s)\n    print(result)",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst s = fs.readFileSync(0, 'utf-8').trim();\nconst result = longestPalindrome(s);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string s;\n    std::cin >> s;\n    Solution sol;\n    std::string result = sol.longestPalindrome(s);\n    std::cout << result << std::endl;\n    return 0;\n}",
        "java": "import java.util.Scanner;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        Solution sol = new Solution();\n        String result = sol.longestPalindrome(s);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "babad", "expected": "bab" },
      { "input": "cbbd", "expected": "bb" },
      { "input": "a", "expected": "a" },
      { "input": "ac", "expected": "a" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "number-of-islands",
    "title": "Number of Islands",
    "difficulty": "Medium",
    "company": "Amadeus",
    "topics": ["Array", "Matrix", "Depth-First Search", "Breadth-First Search"],
    "description": "Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    "constraints": ["`m == grid.length`", "`n == grid[i].length`", "`1 <= m, n <= 300`", "`grid[i][j]` is '0' or '1'."],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]", "output": "1" },
      { "input": "grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]", "output": "3" }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def numIslands(self, grid: List[List[str]]) -> int:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {character[][]} grid\n * @return {number}\n */\nvar numIslands = function(grid) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n\nclass Solution {\npublic:\n    int numIslands(std::vector<std::vector<char>>& grid) {\n        // YOUR CODE HERE\n        return 0;\n    }\n};",
      "java": "class Solution {\n    public int numIslands(char[][] grid) {\n        // YOUR CODE HERE\n        return 0;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    grid = json.loads(sys.stdin.readline().strip())\n    sol = Solution()\n    result = sol.numIslands(grid)\n    print(result)",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst grid = JSON.parse(fs.readFileSync(0, 'utf-8').trim());\nconst result = numIslands(grid);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n\n// __USER_CODE_HERE__\n\n// Basic parser for 2D char array from JSON string\nstatic std::vector<std::vector<char>> parseBoard(const std::string& line){\n    std::vector<std::vector<char>> board;\n    std::vector<char> row;\n    bool in_quote = false;\n    for (char c : line) {\n        if (c == '[') {\n            row.clear();\n        } else if (c == ']') {\n            if (!row.empty()) {\n                board.push_back(row);\n            }\n        } else if (c == '\"') {\n            in_quote = !in_quote;\n        } else if (in_quote && c != ',') {\n            row.push_back(c);\n        }\n    }\n    return board;\n}\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    auto grid = parseBoard(line);\n    Solution sol;\n    int result = sol.numIslands(grid);\n    std::cout << result << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\nimport com.google.gson.Gson;\nimport com.google.gson.reflect.TypeToken;\nimport java.lang.reflect.Type;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        \n        Gson gson = new Gson();\n        Type type = new TypeToken<char[][]>(){}.getType();\n        char[][] grid = gson.fromJson(line, type);\n        \n        Solution sol = new Solution();\n        int result = sol.numIslands(grid);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "[[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]", "expected": "1" },
      { "input": "[[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]", "expected": "3" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "word-break-ii",
    "title": "Word Break II",
    "difficulty": "Hard",
    "company": "UBS",
    "topics": ["Dynamic Programming", "Backtracking", "Trie"],
    "description": "Given a string `s` and a dictionary of strings `wordDict`, add spaces in `s` to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.\n\n**Note** that the same word in the dictionary may be reused multiple times in the segmentation.",
    "constraints": ["`1 <= s.length <= 20`", "`1 <= wordDict.length <= 1000`", "`1 <= wordDict[i].length <= 10`", "`s` and `wordDict[i]` consist of only lowercase English letters."],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "s = catsanddog, wordDict = [\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]", "output": "[\"cats and dog\",\"cat sand dog\"]" },
      { "input": "s = pineapplepenapple, wordDict = [\"apple\",\"pen\",\"applepen\",\"pine\",\"pineapple\"]", "output": "[\"pine apple pen apple\",\"pineapple pen apple\",\"pine applepen apple\"]" }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {string} s\n * @param {string[]} wordDict\n * @return {string[]}\n */\nvar wordBreak = function(s, wordDict) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n#include <string>\n#include <unordered_set>\n\nclass Solution {\npublic:\n    std::vector<std::string> wordBreak(std::string s, std::vector<std::string>& wordDict) {\n        // YOUR CODE HERE\n        return {};\n    }\n};",
      "java": "import java.util.*;\n\nclass Solution {\n    public List<String> wordBreak(String s, List<String> wordDict) {\n        // YOUR CODE HERE\n        return new ArrayList<>();\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    s = lines[0].strip()\n    wordDict = json.loads(lines[1].strip())\n    \n    sol = Solution()\n    result = sol.wordBreak(s, wordDict)\n    result.sort()\n    print(json.dumps(result, separators=(',', ':')))",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst s = input[0];\nconst wordDict = JSON.parse(input[1]);\nconst result = wordBreak(s, wordDict);\nresult.sort();\nconsole.log(JSON.stringify(result));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <unordered_set>\n\n// __USER_CODE_HERE__\n\n// Basic parser for string array from JSON\nstatic std::vector<std::string> parseStrings(const std::string& line){\n    std::vector<std::string> out; std::string cur; bool inq=false;\n    for(size_t i=0;i<line.size();++i){\n        char c=line[i];\n        if(c=='\"'){\n            if(!inq){ inq=true; cur.clear(); }\n            else{ inq=false; out.push_back(cur); cur.clear(); }\n        } else if(inq){ cur.push_back(c); }\n    }\n    return out;\n}\n\nint main() {\n    std::string line1, line2;\n    std::getline(std::cin, line1);\n    std::getline(std::cin, line2);\n\n    std::string s = line1;\n    std::vector<std::string> wordDict = parseStrings(line2);\n\n    Solution sol;\n    std::vector<std::string> result = sol.wordBreak(s, wordDict);\n    std::sort(result.begin(), result.end());\n\n    std::cout << \"[\";\n    for (size_t i = 0; i < result.size(); ++i) {\n        std::cout << \"\\\"\" << result[i] << \"\\\"\" << (i == result.size() - 1 ? \"\" : \",\");\n    }\n    std::cout << \"]\" << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\nimport com.google.gson.Gson;\nimport com.google.gson.reflect.TypeToken;\nimport java.lang.reflect.Type;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        String wordDictLine = sc.nextLine();\n\n        Gson gson = new Gson();\n        Type type = new TypeToken<List<String>>(){}.getType();\n        List<String> wordDict = gson.fromJson(wordDictLine, type);\n\n        Solution sol = new Solution();\n        List<String> result = sol.wordBreak(s, wordDict);\n        Collections.sort(result);\n        System.out.println(gson.toJson(result).replaceAll(\"\\\\s\", \"\"));\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "catsanddog\n[\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]", "expected": "[\"cat sand dog\",\"cats and dog\"]" },
      { "input": "pineapplepenapple\n[\"apple\",\"pen\",\"applepen\",\"pine\",\"pineapple\"]", "expected": "[\"pine apple pen apple\",\"pine applepen apple\",\"pineapple pen apple\"]" },
      { "input": "catsandog\n[\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]", "expected": "[]" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "maximum-subarray",
    "title": "Maximum Subarray",
    "difficulty": "Medium",
    "company": "Infosys",
    "topics": ["Array", "Dynamic Programming", "Divide and Conquer"],
    "description": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    "constraints": ["`1 <= nums.length <= 10^5`", "`-10^4 <= nums[i] <= 10^4`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]", "output": "6", "explanation": "The subarray [4,-1,2,1] has the largest sum 6." },
      { "input": "nums = [1]", "output": "1", "explanation": "The subarray [1] has the largest sum 1." },
      { "input": "nums = [5,4,-1,7,8]", "output": "23", "explanation": "The subarray [5,4,-1,7,8] has the largest sum 23." }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar maxSubArray = function(nums) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n#include <algorithm>\n\nclass Solution {\npublic:\n    int maxSubArray(std::vector<int>& nums) {\n        // YOUR CODE HERE\n        return 0;\n    }\n};",
      "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        // YOUR CODE HERE\n        return 0;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    line = sys.stdin.readline().strip()\n    nums = list(map(int, line.split())) if line else []\n    sol = Solution()\n    result = sol.maxSubArray(nums)\n    print(result)",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nums = input ? input.split(' ').map(Number) : [];\nconst result = maxSubArray(nums);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <limits>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    std::stringstream ss(line);\n    std::vector<int> nums;\n    int num;\n    while (ss >> num) { nums.push_back(num); }\n\n    Solution sol;\n    int result = sol.maxSubArray(nums);\n    std::cout << result << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        String[] numsStr = line.isEmpty() ? new String[0] : line.split(\" \");\n        int[] nums = new int[numsStr.length];\n        for (int i = 0; i < numsStr.length; i++) {\n            nums[i] = Integer.parseInt(numsStr[i]);\n        }\n\n        Solution sol = new Solution();\n        int result = sol.maxSubArray(nums);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "-2 1 -3 4 -1 2 1 -5 4", "expected": "6" },
      { "input": "1", "expected": "1" },
      { "input": "5 4 -1 7 8", "expected": "23" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "implement-queue-using-stacks",
    "title": "Implement Queue using Stacks",
    "difficulty": "Easy",
    "company": "TCS",
    "topics": ["Stack", "Queue", "Design"],
    "description": "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).",
    "constraints": ["`1 <= x <= 9`", "At most 100 calls will be made to `push`, `pop`, `peek`, and `empty`.", "All the calls to `pop` and `peek` are valid."],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      {
        "input": "commands = [\"MyQueue\", \"push\", \"push\", \"peek\", \"pop\", \"empty\"]\nvalues = [[], [1], [2], [], [], []]",
        "output": "[null, null, null, 1, 1, false]"
      }
    ],
    "starterCode": {
        "python": "class MyQueue:\n\n    def __init__(self):\n        # YOUR CODE HERE\n        pass\n\n    def push(self, x: int) -> None:\n        # YOUR CODE HERE\n        pass\n\n    def pop(self) -> int:\n        # YOUR CODE HERE\n        pass\n\n    def peek(self) -> int:\n        # YOUR CODE HERE\n        pass\n\n    def empty(self) -> bool:\n        # YOUR CODE HERE\n        pass\n\n# Your MyQueue object will be instantiated and called as such:\n# obj = MyQueue()\n# obj.push(x)\n# param_2 = obj.pop()\n# param_3 = obj.peek()\n# param_4 = obj.empty()",
        "javascript": "var MyQueue = function() {\n    // YOUR CODE HERE\n};\n\n/** \n * @param {number} x\n * @return {void}\n */\nMyQueue.prototype.push = function(x) {\n    // YOUR CODE HERE\n};\n\n/**\n * @return {number}\n */\nMyQueue.prototype.pop = function() {\n    // YOUR CODE HERE\n};\n\n/**\n * @return {number}\n */\nMyQueue.prototype.peek = function() {\n    // YOUR CODE HERE\n};\n\n/**\n * @return {boolean}\n */\nMyQueue.prototype.empty = function() {\n    // YOUR CODE HERE\n};\n\n/** \n * Your MyQueue object will be instantiated and called as such:\n * var obj = new MyQueue()\n * obj.push(x)\n * var param_2 = obj.pop()\n * var param_3 = obj.peek()\n * var param_4 = obj.empty()\n */",
        "cpp": "#include <stack>\n\nclass MyQueue {\npublic:\n    MyQueue() {\n        // YOUR CODE HERE\n    }\n    \n    void push(int x) {\n        // YOUR CODE HERE\n    }\n    \n    int pop() {\n        // YOUR CODE HERE\n        return 0; // Placeholder\n    }\n    \n    int peek() {\n        // YOUR CODE HERE\n        return 0; // Placeholder\n    }\n    \n    bool empty() {\n        // YOUR CODE HERE\n        return true; // Placeholder\n    }\n};",
        "java": "import java.util.Stack;\n\nclass MyQueue {\n\n    public MyQueue() {\n        // YOUR CODE HERE\n    }\n    \n    public void push(int x) {\n        // YOUR CODE HERE\n    }\n    \n    public int pop() {\n        // YOUR CODE HERE\n        return 0; // Placeholder\n    }\n    \n    public int peek() {\n        // YOUR CODE HERE\n        return 0; // Placeholder\n    }\n    \n    public boolean empty() {\n        // YOUR CODE HERE\n        return true; // Placeholder\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    commands = json.loads(lines[0])\n    values = json.loads(lines[1])\n    \n    obj = None\n    results = []\n    \n    for i in range(len(commands)):\n        command = commands[i]\n        if command == 'MyQueue':\n            obj = MyQueue()\n            results.append(None)\n        elif command == 'push' and obj:\n            obj.push(values[i][0])\n            results.append(None)\n        elif command == 'pop' and obj:\n            res = obj.pop()\n            results.append(res)\n        elif command == 'peek' and obj:\n            res = obj.peek()\n            results.append(res)\n        elif command == 'empty' and obj:\n            res = obj.empty()\n            results.append(res)\n        else:\n             results.append(None) # Should not happen with valid input\n    \n    # Use a custom serializer to handle None -> null and boolean correctly\n    def serialize_result(res):\n        if res is None: return 'null'\n        if isinstance(res, bool): return str(res).lower()\n        return str(res)\n\n    print('[' + ','.join(map(serialize_result, results)) + ']')",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst commands = JSON.parse(input[0]);\nconst values = JSON.parse(input[1]);\n\nlet obj = null;\nconst results = [];\n\nfor (let i = 0; i < commands.length; i++) {\n    const command = commands[i];\n    if (command === 'MyQueue') {\n        obj = new MyQueue();\n        results.push(null);\n    } else if (command === 'push' && obj) {\n        obj.push(values[i][0]);\n        results.push(null);\n    } else if (command === 'pop' && obj) {\n        const res = obj.pop();\n        results.push(res);\n    } else if (command === 'peek' && obj) {\n        const res = obj.peek();\n        results.push(res);\n    } else if (command === 'empty' && obj) {\n        const res = obj.empty();\n        results.push(res);\n    } else {\n        results.push(null); // Should not happen\n    }\n}\n\nconsole.log(JSON.stringify(results));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <stack>\n\n// Basic parser for string array\nstatic std::vector<std::string> parseStrings(const std::string& line){\n    std::vector<std::string> out; std::string cur; bool inq=false;\n    for(size_t i=0;i<line.size();++i){\n        char c=line[i];\n        if(c=='\"'){\n            if(!inq){ inq=true; cur.clear(); }\n            else{ inq=false; out.push_back(cur); cur.clear(); }\n        } else if(inq){ cur.push_back(c); }\n    }\n    return out;\n}\n\n// Basic parser for 2D int array\nstatic std::vector<std::vector<int>> parseValues(const std::string& s) {\n    std::vector<std::vector<int>> result;\n    std::string temp = s.substr(1, s.length() - 2);\n    size_t start = 0;\n    while ((start = temp.find('[', start)) != std::string::npos) {\n        size_t end = temp.find(']', start);\n        std::string arr_str = temp.substr(start + 1, end - start - 1);\n        std::stringstream ss(arr_str);\n        int num;\n        std::vector<int> inner_arr;\n        if (ss >> num) { // Check if there's a number\n             inner_arr.push_back(num);\n        }\n        result.push_back(inner_arr);\n        start = end + 1;\n    }\n    return result;\n}\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line1, line2;\n    std::getline(std::cin, line1);\n    std::getline(std::cin, line2);\n    \n    auto commands = parseStrings(line1);\n    auto values = parseValues(line2);\n    \n    MyQueue* obj = nullptr;\n    std::cout << \"[\";\n    \n    for (size_t i = 0; i < commands.size(); ++i) {\n        if (i > 0) std::cout << \",\";\n        if (commands[i] == \"MyQueue\") {\n            obj = new MyQueue();\n            std::cout << \"null\";\n        } else if (commands[i] == \"push\" && obj) {\n            obj->push(values[i][0]);\n            std::cout << \"null\";\n        } else if (commands[i] == \"pop\" && obj) {\n            int res = obj->pop();\n            std::cout << res;\n        } else if (commands[i] == \"peek\" && obj) {\n            int res = obj->peek();\n            std::cout << res;\n        } else if (commands[i] == \"empty\" && obj) {\n            bool res = obj->empty();\n            std::cout << (res ? \"true\" : \"false\");\n        } else {\n             std::cout << \"null\"; // Error case\n        }\n    }\n    \n    std::cout << \"]\" << std::endl;\n    delete obj;\n    return 0;\n}",
        "java": "import java.util.*;\nimport com.google.gson.Gson;\nimport com.google.gson.reflect.TypeToken;\nimport java.lang.reflect.Type;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String commandsJson = sc.nextLine();\n        String valuesJson = sc.nextLine();\n        \n        Gson gson = new Gson();\n        Type commandType = new TypeToken<List<String>>(){}.getType();\n        Type valuesType = new TypeToken<List<List<Integer>>>(){}.getType();\n        \n        List<String> commands = gson.fromJson(commandsJson, commandType);\n        List<List<Integer>> values = gson.fromJson(valuesJson, valuesType);\n        \n        MyQueue obj = null;\n        List<Object> results = new ArrayList<>(); // Use Object to store mixed types\n        \n        for (int i = 0; i < commands.size(); i++) {\n            String command = commands.get(i);\n            if (command.equals(\"MyQueue\")) {\n                obj = new MyQueue();\n                results.add(null);\n            } else if (command.equals(\"push\") && obj != null) {\n                obj.push(values.get(i).get(0));\n                results.add(null);\n            } else if (command.equals(\"pop\") && obj != null) {\n                int res = obj.pop();\n                results.add(res);\n            } else if (command.equals(\"peek\") && obj != null) {\n                int res = obj.peek();\n                results.add(res);\n            } else if (command.equals(\"empty\") && obj != null) {\n                boolean res = obj.empty();\n                results.add(res);\n            } else {\n                 results.add(null);\n            }\n        }\n        \n        // Custom null-friendly JSON serialization for mixed types\n        StringBuilder sb = new StringBuilder();\n        sb.append(\"[\");\n        for(int i = 0; i < results.size(); i++){\n            Object res = results.get(i);\n            if(res == null){\n                sb.append(\"null\");\n            } else if (res instanceof Boolean) {\n                 sb.append(res.toString());\n            } else { // Assuming Integer\n                sb.append(res);\n            }\n            if(i < results.size() - 1) sb.append(\",\");\n        }\n        sb.append(\"]\");\n        System.out.println(sb.toString());\n        sc.close();\n    }\n}"
    },
    "testCases": [
      {
        "input": "[\"MyQueue\",\"push\",\"push\",\"peek\",\"pop\",\"empty\"]\n[[],[1],[2],[],[],[]]",
        "expected": "[null,null,null,1,1,false]"
      }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "validate-binary-search-tree",
    "title": "Validate Binary Search Tree",
    "difficulty": "Medium",
    "company": "ZS Associates",
    "topics": ["Tree", "Depth-First Search", "Recursion"],
    "description": "Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).\n\nA valid BST is defined as follows:\n- The left subtree of a node contains only nodes with keys less than the node's key.\n- The right subtree of a node contains only nodes with keys greater than the node's key.\n- Both the left and right subtrees must also be binary search trees.",
    "constraints": ["The number of nodes in the tree is in the range `[1, 10^4]`.", "`-2^31 <= Node.val <= 2^31 - 1`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "root = [2,1,3]", "output": "true" },
      { "input": "root = [5,1,4,null,null,3,6]", "output": "false", "explanation": "The root node's value is 5 but its right child's value is 4." }
    ],
    "starterCode": {
        "python": "from typing import Optional\n\n# Definition for a binary tree node.\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        # YOUR CODE HERE\n        pass",
        "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n * this.val = (val===undefined ? 0 : val)\n * this.left = (left===undefined ? null : left)\n * this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isValidBST = function(root) {\n    // YOUR CODE HERE\n};",
        "cpp": "#include <limits>\n\n// Definition for a binary tree node.\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode() : val(0), left(nullptr), right(nullptr) {}\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n};\n\nclass Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        // YOUR CODE HERE\n        return false;\n    }\n};",
        "java": "// Definition for a binary tree node.\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Solution {\n    public boolean isValidBST(TreeNode root) {\n        // YOUR CODE HERE\n        return false;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom collections import deque\nfrom typing import Optional, List\n\n# __USER_CODE_HERE__\n\ndef build_tree(nodes_str: List[str]) -> Optional[TreeNode]:\n    if not nodes_str or nodes_str[0] == 'null':\n        return None\n    \n    nodes = [None if s == 'null' else TreeNode(int(s)) for s in nodes_str]\n    root = nodes[0]\n    queue = deque([root])\n    i = 1\n    while queue and i < len(nodes):\n        node = queue.popleft()\n        if i < len(nodes) and nodes[i] is not None:\n            node.left = nodes[i]\n            queue.append(node.left)\n        i += 1\n        if i < len(nodes) and nodes[i] is not None:\n            node.right = nodes[i]\n            queue.append(node.right)\n        i += 1\n    return root\n\nif __name__ == '__main__':\n    line = sys.stdin.readline().strip()\n    nodes_str = line.split() if line else []\n    root = build_tree(nodes_str)\n    \n    sol = Solution()\n    result = sol.isValidBST(root)\n    print(str(result).lower())",
        "javascript": "function TreeNode(val, left, right) {\n    this.val = (val===undefined ? 0 : val);\n    this.left = (left===undefined ? null : left);\n    this.right = (right===undefined ? null : right);\n}\n\n// __USER_CODE_HERE__\n\nfunction buildTree(nodesStr) {\n    if (!nodesStr.length || nodesStr[0] === 'null') return null;\n    \n    const nodes = nodesStr.map(s => s === 'null' ? null : new TreeNode(Number(s)));\n    const root = nodes[0];\n    const queue = [root];\n    let i = 1;\n    while (queue.length > 0 && i < nodes.length) {\n        const node = queue.shift();\n        if (i < nodes.length && nodes[i] !== null) {\n            node.left = nodes[i];\n            queue.push(node.left);\n        }\n        i++;\n        if (i < nodes.length && nodes[i] !== null) {\n            node.right = nodes[i];\n            queue.push(node.right);\n        }\n        i++;\n    }\n    return root;\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nodesStr = input ? input.split(' ') : [];\n\nconst root = buildTree(nodesStr);\nconst result = isValidBST(root);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <queue>\n#include <limits>\n\n// __USER_CODE_HERE__\n\nTreeNode* buildTree(const std::vector<std::string>& nodes_str) {\n    if (nodes_str.empty() || nodes_str[0] == \"null\") {\n        return nullptr;\n    }\n\n    std::vector<TreeNode*> nodes;\n    for (const auto& s : nodes_str) {\n        if (s == \"null\") {\n            nodes.push_back(nullptr);\n        } else {\n            nodes.push_back(new TreeNode(std::stoi(s)));\n        }\n    }\n\n    TreeNode* root = nodes[0];\n    std::queue<TreeNode*> q;\n    q.push(root);\n    int i = 1;\n    while (!q.empty() && i < nodes.size()) {\n        TreeNode* node = q.front();\n        q.pop();\n        if (i < nodes.size() && nodes[i] != nullptr) {\n            node->left = nodes[i];\n            q.push(node->left);\n        }\n        i++;\n        if (i < nodes.size() && nodes[i] != nullptr) {\n            node->right = nodes[i];\n            q.push(node->right);\n        }\n        i++;\n    }\n    return root;\n}\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    std::stringstream ss(line);\n    std::string s;\n    std::vector<std::string> nodes_str;\n    while (ss >> s) { nodes_str.push_back(s); }\n\n    TreeNode* root = buildTree(nodes_str);\n\n    Solution sol;\n    bool result = sol.isValidBST(root);\n    std::cout << (result ? \"true\" : \"false\") << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static TreeNode buildTree(String[] nodesStr) {\n        if (nodesStr.length == 0 || nodesStr[0].equals(\"null\")) {\n            return null;\n        }\n\n        TreeNode[] nodes = new TreeNode[nodesStr.length];\n        for (int i = 0; i < nodesStr.length; i++) {\n            if (!nodesStr[i].equals(\"null\")) {\n                nodes[i] = new TreeNode(Integer.parseInt(nodesStr[i]));\n            }\n        }\n\n        TreeNode root = nodes[0];\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        int i = 1;\n        while (!q.isEmpty() && i < nodes.length) {\n            TreeNode node = q.poll();\n            if (i < nodes.length && nodes[i] != null) {\n                node.left = nodes[i];\n                q.add(node.left);\n            }\n            i++;\n            if (i < nodes.length && nodes[i] != null) {\n                node.right = nodes[i];\n                q.add(node.right);\n            }\n            i++;\n        }\n        return root;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        String[] nodesStr = line.isEmpty() ? new String[0] : line.split(\" \");\n        TreeNode root = buildTree(nodesStr);\n\n        Solution sol = new Solution();\n        boolean result = sol.isValidBST(root);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "2 1 3", "expected": "true" },
      { "input": "5 1 4 null null 3 6", "expected": "false" },
      { "input": "5 4 6 null null 3 7", "expected": "false" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "search-in-rotated-sorted-array",
    "title": "Search in Rotated Sorted Array",
    "difficulty": "Medium",
    "company": "Capgemini",
    "topics": ["Array", "Binary Search"],
    "description": "There is an integer array `nums` sorted in ascending order (with distinct values).\n\nPrior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index 3 and become `[4,5,6,7,0,1,2]`.\n\nGiven the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.\n\nYou must write an algorithm with `O(log n)` runtime complexity.",
    "constraints": ["`1 <= nums.length <= 5000`", "`-10^4 <= nums[i] <= 10^4`", "All values of `nums` are unique.", "`nums` is an ascending array that is possibly rotated.", "`-10^4 <= target <= 10^4`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "nums = [4,5,6,7,0,1,2], target = 0", "output": "4" },
      { "input": "nums = [4,5,6,7,0,1,2], target = 3", "output": "-1" },
      { "input": "nums = [1], target = 0", "output": "-1" }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar search = function(nums, target) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n\nclass Solution {\npublic:\n    int search(std::vector<int>& nums, int target) {\n        // YOUR CODE HERE\n        return 0;\n    }\n};",
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        // YOUR CODE HERE\n        return 0;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    nums = list(map(int, lines[0].strip().split()))\n    target = int(lines[1].strip())\n    \n    sol = Solution()\n    result = sol.search(nums, target)\n    print(result)",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst nums = input[0].split(' ').map(Number);\nconst target = Number(input[1]);\nconst result = search(nums, target);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line1, line2;\n    std::getline(std::cin, line1);\n    std::getline(std::cin, line2);\n\n    std::stringstream ss(line1);\n    std::vector<int> nums;\n    int num;\n    while (ss >> num) { nums.push_back(num); }\n    int target = std::stoi(line2);\n\n    Solution sol;\n    int result = sol.search(nums, target);\n    std::cout << result << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] numsStr = sc.nextLine().split(\" \");\n        int[] nums = new int[numsStr.length];\n        for (int i = 0; i < numsStr.length; i++) {\n            nums[i] = Integer.parseInt(numsStr[i]);\n        }\n        int target = sc.nextInt();\n\n        Solution sol = new Solution();\n        int result = sol.search(nums, target);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "4 5 6 7 0 1 2\n0", "expected": "4" },
      { "input": "4 5 6 7 0 1 2\n3", "expected": "-1" },
      { "input": "1\n0", "expected": "-1" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "minimum-window-substring",
    "title": "Minimum Window Substring",
    "difficulty": "Hard",
    "company": "IBM",
    "topics": ["String", "Sliding Window", "Hash Table"],
    "description": "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `\"\"`.\n\nThe testcases will be generated such that the answer is unique.",
    "constraints": ["`m == s.length`", "`n == t.length`", "`1 <= m, n <= 10^5`", "`s` and `t` consist of uppercase and lowercase English letters."],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "s = ADOBECODEBANC, t = ABC", "output": "BANC" },
      { "input": "s = a, t = a", "output": "a" },
      { "input": "s = a, t = aa", "output": "\"\"" }
    ],
    "starterCode": {
      "python": "import collections\n\nclass Solution:\n    def minWindow(self, s: str, t: str) -> str:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {string} s\n * @param {string} t\n * @return {string}\n */\nvar minWindow = function(s, t) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <string>\n#include <unordered_map>\n#include <limits>\n\nclass Solution {\npublic:\n    std::string minWindow(std::string s, std::string t) {\n        // YOUR CODE HERE\n        return \"\";\n    }\n};",
      "java": "import java.util.HashMap;\nimport java.util.Map;\n\nclass Solution {\n    public String minWindow(String s, String t) {\n        // YOUR CODE HERE\n        return \"\";\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport collections\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    s = lines[0].strip()\n    t = lines[1].strip()\n    sol = Solution()\n    result = sol.minWindow(s, t)\n    print(result)",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst s = lines[0];\nconst t = lines[1];\nconst result = minWindow(s, t);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <string>\n#include <unordered_map>\n#include <limits>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string s, t;\n    std::cin >> s >> t;\n    Solution sol;\n    std::string result = sol.minWindow(s, t);\n    std::cout << result << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        String t = sc.nextLine();\n        Solution sol = new Solution();\n        String result = sol.minWindow(s, t);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "ADOBECODEBANC\nABC", "expected": "BANC" },
      { "input": "a\na", "expected": "a" },
      { "input": "a\naa", "expected": "" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "invert-binary-tree",
    "title": "Invert Binary Tree",
    "difficulty": "Easy",
    "company": "Schneider Electric",
    "topics": ["Tree", "Depth-First Search", "Breadth-First Search", "Recursion"],
    "description": "Given the `root` of a binary tree, invert the tree, and return its root.",
    "constraints": ["The number of nodes in the tree is in the range `[0, 100]`.", "`-100 <= Node.val <= 100`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "root = [4,2,7,1,3,6,9]", "output": "[4,7,2,9,6,3,1]" },
      { "input": "root = [2,1,3]", "output": "[2,3,1]" }
    ],
    "starterCode": {
        "python": "from typing import Optional\n\n# Definition for a binary tree node.\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        # YOUR CODE HERE\n        pass",
        "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n * this.val = (val===undefined ? 0 : val)\n * this.left = (left===undefined ? null : left)\n * this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function(root) {\n    // YOUR CODE HERE\n};",
        "cpp": "#include <algorithm>\n\n// Definition for a binary tree node.\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode() : val(0), left(nullptr), right(nullptr) {}\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n};\n\nclass Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        // YOUR CODE HERE\n        return nullptr;\n    }\n};",
        "java": "// Definition for a binary tree node.\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Solution {\n    public TreeNode invertTree(TreeNode root) {\n        // YOUR CODE HERE\n        return null;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom collections import deque\nfrom typing import Optional, List\n\n# __USER_CODE_HERE__\n\ndef build_tree(nodes_str: List[str]) -> Optional[TreeNode]:\n    if not nodes_str or nodes_str[0] == 'null': return None\n    nodes = [None if s == 'null' else TreeNode(int(s)) for s in nodes_str]\n    root = nodes[0]\n    queue = deque([root])\n    i = 1\n    while queue and i < len(nodes):\n        node = queue.popleft()\n        if i < len(nodes) and nodes[i] is not None:\n            node.left = nodes[i]\n            queue.append(node.left)\n        i += 1\n        if i < len(nodes) and nodes[i] is not None:\n            node.right = nodes[i]\n            queue.append(node.right)\n        i += 1\n    return root\n\ndef tree_to_list_level_order(root: Optional[TreeNode]) -> List[Optional[int]]:\n    if not root: return []\n    result = []\n    q = deque([root])\n    while q:\n        node = q.popleft()\n        result.append(node.val if node else None)\n        if node:\n            q.append(node.left)\n            q.append(node.right)\n    # Trim trailing nulls\n    while result and result[-1] is None:\n        result.pop()\n    return result\n\nif __name__ == '__main__':\n    line = sys.stdin.readline().strip()\n    nodes_str = line.split() if line else []\n    root = build_tree(nodes_str)\n    sol = Solution()\n    inverted_root = sol.invertTree(root)\n    result_list = tree_to_list_level_order(inverted_root)\n    # Convert None to 'null' string for JSON output\n    result_json = [val if val is not None else 'null' for val in result_list]\n    print(json.dumps(result_json, separators=(',', ':')))",
        "javascript": "function TreeNode(val, left, right) {\n    this.val = (val===undefined ? 0 : val);\n    this.left = (left===undefined ? null : left);\n    this.right = (right===undefined ? null : right);\n}\n\n// __USER_CODE_HERE__\n\nfunction buildTree(nodesStr) {\n    if (!nodesStr.length || nodesStr[0] === 'null') return null;\n    const nodes = nodesStr.map(s => s === 'null' ? null : new TreeNode(Number(s)));\n    const root = nodes[0];\n    const queue = [root];\n    let i = 1;\n    while (queue.length > 0 && i < nodes.length) {\n        const node = queue.shift();\n        if (i < nodes.length && nodes[i] !== null) { node.left = nodes[i]; queue.push(node.left); }\n        i++;\n        if (i < nodes.length && nodes[i] !== null) { node.right = nodes[i]; queue.push(node.right); }\n        i++;\n    }\n    return root;\n}\n\nfunction treeToListLevelOrder(root) {\n    if (!root) return [];\n    const result = [];\n    const q = [root];\n    while(q.length > 0) {\n        const node = q.shift();\n        result.push(node ? node.val : null);\n        if (node) {\n            q.push(node.left);\n            q.push(node.right);\n        }\n    }\n    while (result.length > 0 && result[result.length - 1] === null) {\n        result.pop();\n    }\n     // Convert nulls back to 'null' string for output consistency if needed\n    return result.map(val => val === null ? 'null' : val);\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nodesStr = input ? input.split(' ') : [];\nconst root = buildTree(nodesStr);\nconst invertedRoot = invertTree(root);\nconst resultList = treeToListLevelOrder(invertedRoot);\nconsole.log(JSON.stringify(resultList));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <queue>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nTreeNode* buildTree(const std::vector<std::string>& nodes_str) {\n    if (nodes_str.empty() || nodes_str[0] == \"null\") return nullptr;\n    std::vector<TreeNode*> nodes;\n    for (const auto& s : nodes_str) {\n        nodes.push_back(s == \"null\" ? nullptr : new TreeNode(std::stoi(s)));\n    }\n    TreeNode* root = nodes[0];\n    std::queue<TreeNode*> q;\n    q.push(root);\n    int i = 1;\n    while (!q.empty() && i < nodes.size()) {\n        TreeNode* node = q.front(); q.pop();\n        if (i < nodes.size() && nodes[i] != nullptr) { node->left = nodes[i]; q.push(node->left); }\n        i++;\n        if (i < nodes.size() && nodes[i] != nullptr) { node->right = nodes[i]; q.push(node->right); }\n        i++;\n    }\n    return root;\n}\n\nstd::vector<std::string> treeToListLevelOrder(TreeNode* root) {\n    std::vector<std::string> result;\n    if (!root) return result;\n    std::queue<TreeNode*> q;\n    q.push(root);\n    while(!q.empty()){\n        TreeNode* node = q.front(); q.pop();\n        result.push_back(node ? std::to_string(node->val) : \"null\");\n        if(node){\n            q.push(node->left);\n            q.push(node->right);\n        }\n    }\n    while(!result.empty() && result.back() == \"null\"){\n        result.pop_back();\n    }\n    return result;\n}\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    std::stringstream ss(line);\n    std::string s;\n    std::vector<std::string> nodes_str;\n    while (ss >> s) { nodes_str.push_back(s); }\n    TreeNode* root = buildTree(nodes_str);\n    Solution sol;\n    TreeNode* inverted_root = sol.invertTree(root);\n    auto result_list = treeToListLevelOrder(inverted_root);\n    std::cout << \"[\";\n    for(size_t i = 0; i < result_list.size(); ++i) {\n        std::cout << result_list[i] << (i == result_list.size() - 1 ? \"\" : \",\");\n    }\n    std::cout << \"]\" << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\nimport com.google.gson.Gson;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static TreeNode buildTree(String[] nodesStr) {\n        if (nodesStr.length == 0 || nodesStr[0].equals(\"null\")) return null;\n        TreeNode[] nodes = new TreeNode[nodesStr.length];\n        for (int i = 0; i < nodesStr.length; i++) {\n            if (!nodesStr[i].equals(\"null\")) nodes[i] = new TreeNode(Integer.parseInt(nodesStr[i]));\n        }\n        TreeNode root = nodes[0];\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        int i = 1;\n        while (!q.isEmpty() && i < nodes.length) {\n            TreeNode node = q.poll();\n            if (i < nodes.length && nodes[i] != null) { node.left = nodes[i]; q.add(node.left); }\n            i++;\n            if (i < nodes.length && nodes[i] != null) { node.right = nodes[i]; q.add(node.right); }\n            i++;\n        }\n        return root;\n    }\n\n    public static List<Integer> treeToListLevelOrder(TreeNode root) {\n        List<Integer> result = new ArrayList<>();\n        if (root == null) return result;\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        int lastNonNullIndex = -1;\n        int index = 0;\n        while(!q.isEmpty()) {\n            TreeNode node = q.poll();\n            if (node != null) {\n                result.add(node.val);\n                lastNonNullIndex = index;\n                q.add(node.left);\n                q.add(node.right);\n            } else {\n                result.add(null); \n            }\n            index++;\n        }\n         // Trim trailing nulls based on lastNonNullIndex\n        return result.subList(0, lastNonNullIndex + 1);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        String[] nodesStr = line.isEmpty() ? new String[0] : line.split(\" \");\n        TreeNode root = buildTree(nodesStr);\n        Solution sol = new Solution();\n        TreeNode invertedRoot = sol.invertTree(root);\n        List<Integer> resultList = treeToListLevelOrder(invertedRoot);\n        \n        Gson gson = new Gson();\n        // Convert nulls to 'null' string before printing\n        System.out.print(\"[\");\n        for (int i = 0; i < resultList.size(); i++) {\n             System.out.print(resultList.get(i) == null ? \"null\" : resultList.get(i));\n             if (i < resultList.size() - 1) System.out.print(\",\");\n        }\n        System.out.println(\"]\");\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "4 2 7 1 3 6 9", "expected": "[4,7,2,9,6,3,1]" },
      { "input": "2 1 3", "expected": "[2,3,1]" },
      { "input": "", "expected": "[]" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "merge-sorted-array",
    "title": "Merge Sorted Array",
    "difficulty": "Easy",
    "company": "ZS Associates",
    "topics": ["Array", "Two Pointers", "Sorting"],
    "description": "You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.\n\nMerge `nums1` and `nums2` into a single array sorted in non-decreasing order.\n\nThe final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.",
    "constraints": ["`nums1.length == m + n`", "`nums2.length == n`", "`0 <= m, n <= 200`", "`1 <= m + n <= 200`", "`-10^9 <= nums1[i], nums2[j] <= 10^9`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", "output": "[1,2,2,3,5,6]" },
      { "input": "nums1 = [1], m = 1, nums2 = [], n = 0", "output": "[1]" }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        \"\"\"\n        Do not return anything, modify nums1 in-place instead.\n        \"\"\"\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number[]} nums1\n * @param {number} m\n * @param {number[]} nums2\n * @param {number} n\n * @return {void} Do not return anything, modify nums1 in-place instead.\n */\nvar merge = function(nums1, m, nums2, n) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n#include <algorithm>\n\nclass Solution {\npublic:\n    void merge(std::vector<int>& nums1, int m, std::vector<int>& nums2, int n) {\n        // YOUR CODE HERE\n    }\n};",
      "java": "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // YOUR CODE HERE\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    nums1_m = lines[0].strip().split()\n    m = int(nums1_m[-1])\n    nums1 = list(map(int, nums1_m[:-1]))\n    nums2_n = lines[1].strip().split()\n    n = int(nums2_n[-1])\n    nums2 = list(map(int, nums2_n[:-1]))\n\n    # Pad nums1 with zeros\n    nums1.extend([0] * n)\n\n    sol = Solution()\n    sol.merge(nums1, m, nums2, n)\n    print(json.dumps(nums1, separators=(',',':')))",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\n\nconst nums1_m = input[0].split(' ');\nconst m = Number(nums1_m.pop());\nconst nums1 = nums1_m.map(Number);\n\nconst nums2_n = input[1].split(' ');\nconst n = Number(nums2_n.pop());\nconst nums2 = nums2_n.map(Number);\n\n// Pad nums1\nwhile (nums1.length < m + n) {\n    nums1.push(0);\n}\n\nmerge(nums1, m, nums2, n);\nconsole.log(JSON.stringify(nums1));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line1, line2;\n    std::getline(std::cin, line1);\n    std::getline(std::cin, line2);\n\n    std::stringstream ss1(line1);\n    std::vector<int> nums1;\n    int num, m;\n    while (ss1 >> num) { nums1.push_back(num); }\n    m = nums1.back();\n    nums1.pop_back();\n\n    std::stringstream ss2(line2);\n    std::vector<int> nums2;\n    int n;\n    while (ss2 >> num) { nums2.push_back(num); }\n    n = nums2.back();\n    nums2.pop_back();\n\n    // Resize nums1 to include space for nums2 elements\n    nums1.resize(m + n);\n\n    Solution sol;\n    sol.merge(nums1, m, nums2, n);\n\n    std::cout << \"[\";\n    for (size_t i = 0; i < nums1.size(); ++i) {\n        std::cout << nums1[i] << (i == nums1.size() - 1 ? \"\" : \",\");\n    }\n    std::cout << \"]\" << std::endl;\n\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] nums1_m = sc.nextLine().split(\" \");\n        int m = Integer.parseInt(nums1_m[nums1_m.length - 1]);\n        int[] nums1_actual = new int[m];\n        for (int i = 0; i < m; i++) {\n            nums1_actual[i] = Integer.parseInt(nums1_m[i]);\n        }\n\n        String[] nums2_n = sc.nextLine().split(\" \");\n        int n = Integer.parseInt(nums2_n[nums2_n.length - 1]);\n        int[] nums2 = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums2[i] = Integer.parseInt(nums2_n[i]);\n        }\n        \n        // Prepare nums1 with padding\n        int[] nums1 = new int[m + n];\n        System.arraycopy(nums1_actual, 0, nums1, 0, m);\n\n        Solution sol = new Solution();\n        sol.merge(nums1, m, nums2, n);\n\n        System.out.println(Arrays.toString(nums1).replaceAll(\" \", \"\"));\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "1 2 3 3\n2 5 6 3", "expected": "[1,2,2,3,5,6]" },
      { "input": "1 1\n 0", "expected": "[1]" },
      { "input": " 0\n1 1", "expected": "[1]" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
   {
    "id": "remove-duplicates-from-sorted-list",
    "title": "Remove Duplicates from Sorted List",
    "difficulty": "Easy",
    "company": "Renault Nissan",
    "topics": ["Linked List"],
    "description": "Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.",
    "constraints": ["The number of nodes in the list is in the range `[0, 300]`.", "`-100 <= Node.val <= 100`", "The list is guaranteed to be sorted in ascending order."],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "head = [1,1,2]", "output": "[1,2]" },
      { "input": "head = [1,1,2,3,3]", "output": "[1,2,3]" }
    ],
    "starterCode": {
        "python": "from typing import Optional\n\n# Definition for singly-linked list.\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\nclass Solution:\n    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # YOUR CODE HERE\n        pass",
        "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n * this.val = (val===undefined ? 0 : val)\n * this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar deleteDuplicates = function(head) {\n    // YOUR CODE HERE\n};",
        "cpp": "// Definition for singly-linked list.\nstruct ListNode {\n    int val;\n    ListNode *next;\n    ListNode() : val(0), next(nullptr) {}\n    ListNode(int x) : val(x), next(nullptr) {}\n    ListNode(int x, ListNode *next) : val(x), next(next) {}\n};\n\nclass Solution {\npublic:\n    ListNode* deleteDuplicates(ListNode* head) {\n        // YOUR CODE HERE\n        return nullptr;\n    }\n};",
        "java": "// Definition for singly-linked list.\nclass ListNode {\n    int val;\n    ListNode next;\n    ListNode() {}\n    ListNode(int val) { this.val = val; }\n    ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n}\n\nclass Solution {\n    public ListNode deleteDuplicates(ListNode head) {\n        // YOUR CODE HERE\n        return null;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import Optional, List\n\n# __USER_CODE_HERE__\n\ndef build_list(nodes_str: List[str]) -> Optional[ListNode]:\n    if not nodes_str: return None\n    head = ListNode(int(nodes_str[0]))\n    current = head\n    for s in nodes_str[1:]:\n        current.next = ListNode(int(s))\n        current = current.next\n    return head\n\ndef list_to_array(head: Optional[ListNode]) -> List[int]:\n    arr = []\n    current = head\n    while current:\n        arr.append(current.val)\n        current = current.next\n    return arr\n\nif __name__ == '__main__':\n    line = sys.stdin.readline().strip()\n    list_nodes = line.split() if line else []\n    head = build_list(list_nodes)\n    sol = Solution()\n    result_head = sol.deleteDuplicates(head)\n    result_arr = list_to_array(result_head)\n    print(json.dumps(result_arr, separators=(',', ':')))",
        "javascript": "function ListNode(val, next) {\n    this.val = (val===undefined ? 0 : val);\n    this.next = (next===undefined ? null : next);\n}\n\n// __USER_CODE_HERE__\n\nfunction buildList(nodesStr) {\n    if (!nodesStr.length) return null;\n    const head = new ListNode(Number(nodesStr[0]));\n    let current = head;\n    for (let i = 1; i < nodesStr.length; i++) {\n        current.next = new ListNode(Number(nodesStr[i]));\n        current = current.next;\n    }\n    return head;\n}\n\nfunction listToArray(head) {\n    const arr = [];\n    let current = head;\n    while (current) {\n        arr.push(current.val);\n        current = current.next;\n    }\n    return arr;\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst listNodes = input ? input.split(' ') : [];\nconst head = buildList(listNodes);\nconst resultHead = deleteDuplicates(head);\nconst resultArr = listToArray(resultHead);\nconsole.log(JSON.stringify(resultArr));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n\n// __USER_CODE_HERE__\n\nListNode* buildList(const std::vector<int>& nodes) {\n    if (nodes.empty()) return nullptr;\n    ListNode* head = new ListNode(nodes[0]);\n    ListNode* current = head;\n    for (size_t i = 1; i < nodes.size(); ++i) {\n        current->next = new ListNode(nodes[i]);\n        current = current->next;\n    }\n    return head;\n}\n\nvoid printList(ListNode* head) {\n    std::cout << \"[\";\n    ListNode* current = head;\n    while (current) {\n        std::cout << current->val;\n        if (current->next) std::cout << \",\";\n        current = current->next;\n    }\n    std::cout << \"]\" << std::endl;\n}\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    std::stringstream ss(line);\n    std::vector<int> nodes;\n    int num;\n    while (ss >> num) { nodes.push_back(num); }\n    ListNode* head = buildList(nodes);\n    Solution sol;\n    ListNode* result = sol.deleteDuplicates(head);\n    printList(result);\n    // Clean up memory (optional for simple test cases)\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static ListNode buildList(String[] nodesStr) {\n        if (nodesStr.length == 0) return null;\n        ListNode head = new ListNode(Integer.parseInt(nodesStr[0]));\n        ListNode current = head;\n        for (int i = 1; i < nodesStr.length; i++) {\n            current.next = new ListNode(Integer.parseInt(nodesStr[i]));\n            current = current.next;\n        }\n        return head;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        String[] nodesStr = line.isEmpty() ? new String[0] : line.split(\" \");\n        ListNode head = buildList(nodesStr);\n        Solution sol = new Solution();\n        ListNode result = sol.deleteDuplicates(head);\n        List<Integer> resultList = new ArrayList<>();\n        while (result != null) {\n            resultList.add(result.val);\n            result = result.next;\n        }\n        System.out.println(resultList.toString().replaceAll(\" \", \"\"));\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "1 1 2", "expected": "[1,2]" },
      { "input": "1 1 2 3 3", "expected": "[1,2,3]" },
      { "input": "", "expected": "[]" },
      { "input": "1 1 1", "expected": "[1]" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
   {
    "id": "subsets",
    "title": "Subsets",
    "difficulty": "Medium",
    "company": "Principal Global Services",
    "topics": ["Array", "Backtracking", "Bit Manipulation"],
    "description": "Given an integer array `nums` of unique elements, return all possible subsets (the power set).\n\nThe solution set must not contain duplicate subsets. Return the solution in any order.",
    "constraints": ["`1 <= nums.length <= 10`", "`-10 <= nums[i] <= 10`", "All the numbers of `nums` are unique."],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "nums = [1,2,3]", "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" },
      { "input": "nums = [0]", "output": "[[],[0]]" }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def subsets(self, nums: List[int]) -> List[List[int]]:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsets = function(nums) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n\nclass Solution {\npublic:\n    std::vector<std::vector<int>> subsets(std::vector<int>& nums) {\n        // YOUR CODE HERE\n        return {};\n    }\n};",
      "java": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        // YOUR CODE HERE\n        return new ArrayList<>();\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    line = sys.stdin.readline().strip()\n    nums = list(map(int, line.split())) if line else []\n    sol = Solution()\n    result = sol.subsets(nums)\n    # Sort inner lists and outer list for consistent output\n    for subset in result:\n        subset.sort()\n    result.sort()\n    print(json.dumps(result, separators=(',', ':')))",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nums = input ? input.split(' ').map(Number) : [];\nconst result = subsets(nums);\n// Sort for consistent output\nresult.forEach(subset => subset.sort((a, b) => a - b));\nresult.sort((a, b) => {\n    const lenDiff = a.length - b.length;\n    if (lenDiff !== 0) return lenDiff;\n    for (let i = 0; i < a.length; i++) {\n        if (a[i] !== b[i]) return a[i] - b[i];\n    }\n    return 0;\n});\nconsole.log(JSON.stringify(result));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    std::stringstream ss(line);\n    std::vector<int> nums;\n    int num;\n    while (ss >> num) { nums.push_back(num); }\n\n    Solution sol;\n    std::vector<std::vector<int>> result = sol.subsets(nums);\n    \n    // Sort for consistent output\n    for (auto& subset : result) {\n        std::sort(subset.begin(), subset.end());\n    }\n    std::sort(result.begin(), result.end(), [](const std::vector<int>& a, const std::vector<int>& b) {\n        if (a.size() != b.size()) return a.size() < b.size();\n        return a < b;\n    });\n\n    std::cout << \"[\";\n    for (size_t i = 0; i < result.size(); ++i) {\n        std::cout << \"[\";\n        for (size_t j = 0; j < result[i].size(); ++j) {\n            std::cout << result[i][j] << (j == result[i].size() - 1 ? \"\" : \",\");\n        }\n        std::cout << \"]\" << (i == result.size() - 1 ? \"\" : \",\");\n    }\n    std::cout << \"]\" << std::endl;\n\n    return 0;\n}",
        "java": "import java.util.*;\nimport com.google.gson.Gson;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        String[] numsStr = line.isEmpty() ? new String[0] : line.split(\" \");\n        int[] nums = new int[numsStr.length];\n        for (int i = 0; i < numsStr.length; i++) {\n            nums[i] = Integer.parseInt(numsStr[i]);\n        }\n\n        Solution sol = new Solution();\n        List<List<Integer>> result = sol.subsets(nums);\n        \n        // Sort for consistent output\n        for (List<Integer> subset : result) {\n            Collections.sort(subset);\n        }\n        result.sort((a, b) -> {\n            int lenDiff = a.size() - b.size();\n            if (lenDiff != 0) return lenDiff;\n            for (int i = 0; i < a.size(); i++) {\n                int valDiff = a.get(i) - b.get(i);\n                if (valDiff != 0) return valDiff;\n            }\n            return 0;\n        });\n\n        Gson gson = new Gson();\n        System.out.println(gson.toJson(result).replaceAll(\"\\\\s\", \"\"));\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "1 2 3", "expected": "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]" },
      { "input": "0", "expected": "[[],[0]]" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "kth-largest-element-in-an-array",
    "title": "Kth Largest Element in an Array",
    "difficulty": "Medium",
    "company": "Amadeus",
    "topics": ["Array", "Sorting", "Heap", "Quickselect"],
    "description": "Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array.\n\nNote that it is the `k`th largest element in the sorted order, not the `k`th distinct element.",
    "constraints": ["`1 <= k <= nums.length <= 10^5`", "`-10^4 <= nums[i] <= 10^4`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "nums = [3,2,1,5,6,4], k = 2", "output": "5" },
      { "input": "nums = [3,2,3,1,2,4,5,5,6], k = 4", "output": "4" }
    ],
    "starterCode": {
      "python": "from typing import List\nimport heapq\n\nclass Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nvar findKthLargest = function(nums, k) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n#include <queue>\n#include <algorithm>\n\nclass Solution {\npublic:\n    int findKthLargest(std::vector<int>& nums, int k) {\n        // YOUR CODE HERE\n        return 0;\n    }\n};",
      "java": "import java.util.PriorityQueue;\n\nclass Solution {\n    public int findKthLargest(int[] nums, int k) {\n        // YOUR CODE HERE\n        return 0;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\nimport heapq\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    nums = list(map(int, lines[0].strip().split()))\n    k = int(lines[1].strip())\n    \n    sol = Solution()\n    result = sol.findKthLargest(nums, k)\n    print(result)",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst nums = input[0].split(' ').map(Number);\nconst k = Number(input[1]);\nconst result = findKthLargest(nums, k);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <queue>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line1, line2;\n    std::getline(std::cin, line1);\n    std::getline(std::cin, line2);\n\n    std::stringstream ss(line1);\n    std::vector<int> nums;\n    int num;\n    while (ss >> num) { nums.push_back(num); }\n    int k = std::stoi(line2);\n\n    Solution sol;\n    int result = sol.findKthLargest(nums, k);\n    std::cout << result << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] numsStr = sc.nextLine().split(\" \");\n        int[] nums = new int[numsStr.length];\n        for (int i = 0; i < numsStr.length; i++) {\n            nums[i] = Integer.parseInt(numsStr[i]);\n        }\n        int k = sc.nextInt();\n\n        Solution sol = new Solution();\n        int result = sol.findKthLargest(nums, k);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "3 2 1 5 6 4\n2", "expected": "5" },
      { "input": "3 2 3 1 2 4 5 5 6\n4", "expected": "4" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
   {
    "id": "combination-sum",
    "title": "Combination Sum",
    "difficulty": "Medium",
    "company": "Fractal Analytics",
    "topics": ["Array", "Backtracking"],
    "description": "Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order.\n\nThe same number may be chosen from `candidates` an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.",
    "constraints": ["`1 <= candidates.length <= 30`", "`2 <= candidates[i] <= 40`", "All elements of `candidates` are distinct.", "`1 <= target <= 40`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "candidates = [2,3,6,7], target = 7", "output": "[[2,2,3],[7]]" },
      { "input": "candidates = [2,3,5], target = 8", "output": "[[2,2,2,2],[2,3,3],[3,5]]" }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nvar combinationSum = function(candidates, target) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n\nclass Solution {\npublic:\n    std::vector<std::vector<int>> combinationSum(std::vector<int>& candidates, int target) {\n        // YOUR CODE HERE\n        return {};\n    }\n};",
      "java": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        // YOUR CODE HERE\n        return new ArrayList<>();\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    candidates = list(map(int, lines[0].strip().split()))\n    target = int(lines[1].strip())\n    \n    sol = Solution()\n    result = sol.combinationSum(candidates, target)\n    # Sort inner and outer lists for consistent output\n    for combo in result:\n        combo.sort()\n    result.sort()\n    print(json.dumps(result, separators=(',', ':')))",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst candidates = input[0].split(' ').map(Number);\nconst target = Number(input[1]);\nconst result = combinationSum(candidates, target);\n\n// Sort for consistent output\nresult.forEach(combo => combo.sort((a, b) => a - b));\nresult.sort((a, b) => {\n    const lenDiff = a.length - b.length;\n    if (lenDiff !== 0) return lenDiff;\n    for (let i = 0; i < a.length; i++) {\n        if (a[i] !== b[i]) return a[i] - b[i];\n    }\n    return 0;\n});\nconsole.log(JSON.stringify(result));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string line1, line2;\n    std::getline(std::cin, line1);\n    std::getline(std::cin, line2);\n\n    std::stringstream ss(line1);\n    std::vector<int> candidates;\n    int num;\n    while (ss >> num) { candidates.push_back(num); }\n    int target = std::stoi(line2);\n\n    Solution sol;\n    std::vector<std::vector<int>> result = sol.combinationSum(candidates, target);\n    \n    // Sort for consistent output\n    for (auto& combo : result) {\n        std::sort(combo.begin(), combo.end());\n    }\n    std::sort(result.begin(), result.end(), [](const std::vector<int>& a, const std::vector<int>& b) {\n        if (a.size() != b.size()) return a.size() < b.size();\n        return a < b;\n    });\n\n    std::cout << \"[\";\n    for (size_t i = 0; i < result.size(); ++i) {\n        std::cout << \"[\";\n        for (size_t j = 0; j < result[i].size(); ++j) {\n            std::cout << result[i][j] << (j == result[i].size() - 1 ? \"\" : \",\");\n        }\n        std::cout << \"]\" << (i == result.size() - 1 ? \"\" : \",\");\n    }\n    std::cout << \"]\" << std::endl;\n\n    return 0;\n}",
        "java": "import java.util.*;\nimport com.google.gson.Gson;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] candidatesStr = sc.nextLine().split(\" \");\n        int[] candidates = new int[candidatesStr.length];\n        for (int i = 0; i < candidatesStr.length; i++) {\n            candidates[i] = Integer.parseInt(candidatesStr[i]);\n        }\n        int target = sc.nextInt();\n\n        Solution sol = new Solution();\n        List<List<Integer>> result = sol.combinationSum(candidates, target);\n        \n        // Sort for consistent output\n        for (List<Integer> combo : result) {\n            Collections.sort(combo);\n        }\n        result.sort((a, b) -> {\n            int lenDiff = a.size() - b.size();\n            if (lenDiff != 0) return lenDiff;\n            for (int i = 0; i < a.size(); i++) {\n                int valDiff = a.get(i) - b.get(i);\n                if (valDiff != 0) return valDiff;\n            }\n            return 0;\n        });\n\n        Gson gson = new Gson();\n        System.out.println(gson.toJson(result).replaceAll(\"\\\\s\", \"\"));\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "2 3 6 7\n7", "expected": "[[2,2,3],[7]]" },
      { "input": "2 3 5\n8", "expected": "[[2,2,2,2],[2,3,3],[3,5]]" },
      { "input": "2\n1", "expected": "[]" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "edit-distance",
    "title": "Edit Distance",
    "difficulty": "Hard",
    "company": "Quantiphi",
    "topics": ["String", "Dynamic Programming"],
    "description": "Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`.\n\nYou have the following three operations permitted on a word:\n- Insert a character\n- Delete a character\n- Replace a character",
    "constraints": ["`0 <= word1.length, word2.length <= 500`", "`word1` and `word2` consist of lowercase English letters."],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "word1 = horse, word2 = ros", "output": "3", "explanation": "horse -> rorse (replace 'h' with 'r')\nrorse -> rose (remove 'r')\nrose -> ros (remove 'e')" },
      { "input": "word1 = intention, word2 = execution", "output": "5", "explanation": "intention -> inention (remove 't')\ninention -> enention (replace 'i' with 'e')\nenention -> exention (replace 'n' with 'x')\nexention -> exection (replace 'n' with 'c')\nexection -> execution (insert 'u')" }
    ],
    "starterCode": {
      "python": "class Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {string} word1\n * @param {string} word2\n * @return {number}\n */\nvar minDistance = function(word1, word2) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <string>\n#include <vector>\n#include <algorithm>\n\nclass Solution {\npublic:\n    int minDistance(std::string word1, std::string word2) {\n        // YOUR CODE HERE\n        return 0;\n    }\n};",
      "java": "class Solution {\n    public int minDistance(String word1, String word2) {\n        // YOUR CODE HERE\n        return 0;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    lines = sys.stdin.readlines()\n    word1 = lines[0].strip()\n    word2 = lines[1].strip()\n    sol = Solution()\n    result = sol.minDistance(word1, word2)\n    print(result)",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst word1 = lines[0];\nconst word2 = lines[1];\nconst result = minDistance(word1, word2);\nconsole.log(result);",
        "cpp": "#include <iostream>\n#include <string>\n#include <vector>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nint main() {\n    std::string word1, word2;\n    std::cin >> word1 >> word2;\n    Solution sol;\n    int result = sol.minDistance(word1, word2);\n    std::cout << result << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String word1 = sc.nextLine();\n        String word2 = sc.nextLine();\n        Solution sol = new Solution();\n        int result = sol.minDistance(word1, word2);\n        System.out.println(result);\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "horse\nros", "expected": "3" },
      { "input": "intention\nexecution", "expected": "5" },
      { "input": "\n", "expected": "0" },
      { "input": "a\nb", "expected": "1" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
   {
    "id": "serialize-and-deserialize-binary-tree",
    "title": "Serialize and Deserialize Binary Tree",
    "difficulty": "Hard",
    "company": "Global Logic",
    "topics": ["Tree", "Design", "String", "Depth-First Search", "Breadth-First Search"],
    "description": "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.\n\nDesign an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.",
    "constraints": ["The number of nodes in the tree is in the range `[0, 10^4]`.", "`-1000 <= Node.val <= 1000`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "root = [1,2,3,null,null,4,5]", "output": "[1,2,3,null,null,4,5]", "explanation": "The output should match the input structure after serialization and deserialization."}
    ],
    "starterCode": {
        "python": "from collections import deque\n\n# Definition for a binary tree node.\nclass TreeNode(object):\n    def __init__(self, x):\n        self.val = x\n        self.left = None\n        self.right = None\n\nclass Codec:\n\n    def serialize(self, root):\n        \"\"\"Encodes a tree to a single string.\n        \n        :type root: TreeNode\n        :rtype: str\n        \"\"\"\n        # YOUR CODE HERE\n        pass\n        \n\n    def deserialize(self, data):\n        \"\"\"Decodes your encoded data to tree.\n        \n        :type data: str\n        :rtype: TreeNode\n        \"\"\"\n        # YOUR CODE HERE\n        pass\n        \n\n# Your Codec object will be instantiated and called as such:\n# ser = Codec()\n# deser = Codec()\n# ans = deser.deserialize(ser.serialize(root))",
        "javascript": "function TreeNode(val) {\n    this.val = val;\n    this.left = this.right = null;\n}\n\n/**\n * Encodes a tree to a single string.\n *\n * @param {TreeNode} root\n * @return {string}\n */\nvar serialize = function(root) {\n    // YOUR CODE HERE\n};\n\n/**\n * Decodes your encoded data to tree.\n *\n * @param {string} data\n * @return {TreeNode}\n */\nvar deserialize = function(data) {\n    // YOUR CODE HERE\n};\n\n/**\n * Your functions will be called as such:\n * deserialize(serialize(root));\n */",
        "cpp": "#include <string>\n#include <vector>\n#include <queue>\n#include <sstream>\n\n// Definition for a binary tree node.\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\nclass Codec {\npublic:\n\n    // Encodes a tree to a single string.\n    std::string serialize(TreeNode* root) {\n        // YOUR CODE HERE\n        return \"\";\n    }\n\n    // Decodes your encoded data to tree.\n    TreeNode* deserialize(std::string data) {\n        // YOUR CODE HERE\n        return nullptr;\n    }\n};",
        "java": "import java.util.LinkedList;\nimport java.util.Queue;\n\n// Definition for a binary tree node.\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode(int x) { val = x; }\n}\n\npublic class Codec {\n\n    // Encodes a tree to a single string.\n    public String serialize(TreeNode root) {\n        // YOUR CODE HERE\n        return \"\";\n    }\n\n    // Decodes your encoded data to tree.\n    public TreeNode deserialize(String data) {\n        // YOUR CODE HERE\n        return null;\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom collections import deque\nfrom typing import Optional, List\n\n# Definition for a binary tree node (assuming it's defined elsewhere or here)\nclass TreeNode(object):\n    def __init__(self, x):\n        self.val = x\n        self.left = None\n        self.right = None\n\n# __USER_CODE_HERE__\n\ndef build_tree(nodes_str: List[str]) -> Optional[TreeNode]:\n    if not nodes_str or nodes_str[0] == 'null': return None\n    nodes = [None if s == 'null' else TreeNode(int(s)) for s in nodes_str]\n    root = nodes[0]\n    queue = deque([root])\n    i = 1\n    while queue and i < len(nodes):\n        node = queue.popleft()\n        if i < len(nodes) and nodes[i] is not None:\n            node.left = nodes[i]\n            queue.append(node.left)\n        i += 1\n        if i < len(nodes) and nodes[i] is not None:\n            node.right = nodes[i]\n            queue.append(node.right)\n        i += 1\n    return root\n\ndef tree_to_list_level_order(root: Optional[TreeNode]) -> List[Optional[str]]:\n    if not root: return []\n    result = []\n    q = deque([root])\n    while q:\n        node = q.popleft()\n        result.append(str(node.val) if node else 'null')\n        if node:\n            q.append(node.left)\n            q.append(node.right)\n    while result and result[-1] == 'null':\n        result.pop()\n    return result\n\nif __name__ == '__main__':\n    line = sys.stdin.readline().strip()\n    nodes_str = line.split() if line else []\n    root = build_tree(nodes_str)\n    \n    ser = Codec()\n    deser = Codec()\n    data = ser.serialize(root)\n    # print(f\"Serialized: {data}\") # Optional: Debug print\n    deserialized_root = deser.deserialize(data)\n    \n    result_list = tree_to_list_level_order(deserialized_root)\n    print(json.dumps(result_list, separators=(',', ':')))",
        "javascript": "function TreeNode(val) {\n    this.val = val;\n    this.left = this.right = null;\n}\n\n// __USER_CODE_HERE__\n\nfunction buildTree(nodesStr) {\n    if (!nodesStr.length || nodesStr[0] === 'null') return null;\n    const nodes = nodesStr.map(s => s === 'null' ? null : new TreeNode(Number(s)));\n    const root = nodes[0];\n    const queue = [root];\n    let i = 1;\n    while (queue.length > 0 && i < nodes.length) {\n        const node = queue.shift();\n        if (i < nodes.length && nodes[i] !== null) { node.left = nodes[i]; queue.push(node.left); }\n        i++;\n        if (i < nodes.length && nodes[i] !== null) { node.right = nodes[i]; queue.push(node.right); }\n        i++;\n    }\n    return root;\n}\n\nfunction treeToListLevelOrder(root) {\n    if (!root) return [];\n    const result = [];\n    const q = [root];\n    while (q.length > 0) {\n        const node = q.shift();\n        result.push(node ? String(node.val) : 'null');\n        if (node) {\n            q.push(node.left);\n            q.push(node.right);\n        }\n    }\n    while (result.length > 0 && result[result.length - 1] === 'null') {\n        result.pop();\n    }\n    return result;\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nodesStr = input ? input.split(' ') : [];\nconst root = buildTree(nodesStr);\n\nconst data = serialize(root);\n// console.log(\"Serialized:\", data); // Optional: Debug print\nconst deserializedRoot = deserialize(data);\n\nconst resultList = treeToListLevelOrder(deserializedRoot);\nconsole.log(JSON.stringify(resultList));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <queue>\n#include <algorithm>\n\n// Definition for a binary tree node (assuming it's defined in starter code or here)\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\n// __USER_CODE_HERE__\n\nTreeNode* buildTree(const std::vector<std::string>& nodes_str) {\n    if (nodes_str.empty() || nodes_str[0] == \"null\") return nullptr;\n    std::vector<TreeNode*> nodes;\n    for (const auto& s : nodes_str) {\n        nodes.push_back(s == \"null\" ? nullptr : new TreeNode(std::stoi(s)));\n    }\n    TreeNode* root = nodes[0];\n    std::queue<TreeNode*> q;\n    q.push(root);\n    int i = 1;\n    while (!q.empty() && i < nodes.size()) {\n        TreeNode* node = q.front(); q.pop();\n        if (node) { // Check if node is not null before accessing members\n            if (i < nodes.size() && nodes[i] != nullptr) { node->left = nodes[i]; q.push(node->left); }\n            i++;\n            if (i < nodes.size() && nodes[i] != nullptr) { node->right = nodes[i]; q.push(node->right); }\n            i++;\n        } else {\n             // Skip children if current node is null (shouldn't happen with valid input)\n             i += 2;\n        }\n    }\n    return root;\n}\n\nstd::vector<std::string> treeToListLevelOrder(TreeNode* root) {\n    std::vector<std::string> result;\n    if (!root) return result;\n    std::queue<TreeNode*> q;\n    q.push(root);\n    while(!q.empty()){\n        TreeNode* node = q.front(); q.pop();\n        result.push_back(node ? std::to_string(node->val) : \"null\");\n        if(node){\n            q.push(node->left);\n            q.push(node->right);\n        }\n    }\n    while(!result.empty() && result.back() == \"null\"){\n        result.pop_back();\n    }\n    return result;\n}\n\nint main() {\n    std::string line;\n    std::getline(std::cin, line);\n    std::stringstream ss(line);\n    std::string s;\n    std::vector<std::string> nodes_str;\n    while (ss >> s) { nodes_str.push_back(s); }\n    TreeNode* root = buildTree(nodes_str);\n    \n    Codec codec;\n    std::string data = codec.serialize(root);\n    // std::cout << \"Serialized: \" << data << std::endl; // Optional: Debug\n    TreeNode* deserialized_root = codec.deserialize(data);\n\n    auto result_list = treeToListLevelOrder(deserialized_root);\n    std::cout << \"[\";\n    for(size_t i = 0; i < result_list.size(); ++i) {\n        // Need quotes around null for JSON compatibility\n        if (result_list[i] == \"null\") {\n             std::cout << \"\\\"null\\\"\";\n        } else {\n             std::cout << result_list[i];\n        }\n        std::cout << (i == result_list.size() - 1 ? \"\" : \",\");\n    }\n    std::cout << \"]\" << std::endl;\n    return 0;\n}",
        "java": "import java.util.*;\nimport com.google.gson.Gson;\n\n// Definition for a binary tree node (assuming defined in starter or here)\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode(int x) { val = x; }\n}\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static TreeNode buildTree(String[] nodesStr) {\n        if (nodesStr.length == 0 || nodesStr[0].equals(\"null\")) return null;\n        TreeNode[] nodes = new TreeNode[nodesStr.length];\n        for (int i = 0; i < nodesStr.length; i++) {\n            if (!nodesStr[i].equals(\"null\")) nodes[i] = new TreeNode(Integer.parseInt(nodesStr[i]));\n        }\n        TreeNode root = nodes[0];\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        int i = 1;\n        while (!q.isEmpty() && i < nodes.length) {\n            TreeNode node = q.poll();\n             if (node != null) { // Check if node is not null before accessing members\n                 if (i < nodes.length && nodes[i] != null) { node.left = nodes[i]; q.add(node.left); }\n                 i++;\n                 if (i < nodes.length && nodes[i] != null) { node.right = nodes[i]; q.add(node.right); }\n                 i++;\n             } else {\n                  // Skip children if current node is null\n                  i += 2;\n             }\n        }\n        return root;\n    }\n\n    public static List<String> treeToListLevelOrder(TreeNode root) {\n        List<String> result = new ArrayList<>();\n        if (root == null) return result;\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        int lastNonNullIndex = -1;\n        int index = 0;\n        Queue<TreeNode> levelNodes = new LinkedList<>();\n        levelNodes.add(root);\n\n        while(!levelNodes.isEmpty()){\n            TreeNode node = levelNodes.poll();\n            if (node != null) {\n                result.add(String.valueOf(node.val));\n                lastNonNullIndex = index;\n                levelNodes.add(node.left);\n                levelNodes.add(node.right);\n            } else {\n                result.add(\"null\"); \n            }\n            index++;\n        }\n       \n        // Return the sublist up to the last non-null element\n        if (lastNonNullIndex >= 0) {\n            return result.subList(0, lastNonNullIndex + 1);\n        } else {\n            return new ArrayList<>(); // Tree was effectively empty or all nulls\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        String[] nodesStr = line.isEmpty() ? new String[0] : line.split(\" \");\n        TreeNode root = buildTree(nodesStr);\n        \n        Codec codec = new Codec();\n        String data = codec.serialize(root);\n        // System.out.println(\"Serialized: \" + data); // Optional Debug\n        TreeNode deserializedRoot = codec.deserialize(data);\n        \n        List<String> resultList = treeToListLevelOrder(deserializedRoot);\n\n        Gson gson = new Gson();\n        System.out.println(gson.toJson(resultList).replaceAll(\"\\\\s\", \"\"));\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "1 2 3 null null 4 5", "expected": "[\"1\",\"2\",\"3\",\"null\",\"null\",\"4\",\"5\"]" },
      { "input": "", "expected": "[]" },
       { "input": "1", "expected": "[\"1\"]" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
  {
    "id": "n-queens",
    "title": "N-Queens",
    "difficulty": "Hard",
    "company": "Principal Global Services",
    "topics": ["Backtracking"],
    "description": "The n-queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.\n\nGiven an integer `n`, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.\n\nEach solution contains a distinct board configuration of the n-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space, respectively.",
    "constraints": ["`1 <= n <= 9`"],
    "constraints_tip": CONSTRAINTS_TIP,
    "examples": [
      { "input": "n = 4", "output": "[\"[.Q.., ...Q, Q..., ..Q.]\", \"[..Q., Q..., ...Q, .Q..]\"]" },
      { "input": "n = 1", "output": "[\"[Q]\"]" }
    ],
    "starterCode": {
      "python": "from typing import List\n\nclass Solution:\n    def solveNQueens(self, n: int) -> List[List[str]]:\n        # YOUR CODE HERE\n        pass",
      "javascript": "/**\n * @param {number} n\n * @return {string[][]}\n */\nvar solveNQueens = function(n) {\n    // YOUR CODE HERE\n};",
      "cpp": "#include <vector>\n#include <string>\n\nclass Solution {\npublic:\n    std::vector<std::vector<std::string>> solveNQueens(int n) {\n        // YOUR CODE HERE\n        return {};\n    }\n};",
      "java": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Solution {\n    public List<List<String>> solveNQueens(int n) {\n        // YOUR CODE HERE\n        return new ArrayList<>();\n    }\n}"
    },
    "driverCode": {
        "python": "import sys\nimport json\nfrom typing import List\n\n# __USER_CODE_HERE__\n\nif __name__ == '__main__':\n    n = int(sys.stdin.readline().strip())\n    sol = Solution()\n    result = sol.solveNQueens(n)\n    # Sort the outer list for consistent output\n    result.sort()\n    print(json.dumps(result, separators=(',', ':')))",
        "javascript": "// __USER_CODE_HERE__\n\nconst fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nconst result = solveNQueens(n);\n// Sort outer list for consistent output\nresult.sort(); \nconsole.log(JSON.stringify(result));",
        "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\n// __USER_CODE_HERE__\n\nint main() {\n    int n;\n    std::cin >> n;\n    Solution sol;\n    std::vector<std::vector<std::string>> result = sol.solveNQueens(n);\n    \n    // Sort outer list for consistent output\n    std::sort(result.begin(), result.end());\n\n    std::cout << \"[\";\n    for (size_t i = 0; i < result.size(); ++i) {\n        std::cout << \"[\";\n        for (size_t j = 0; j < result[i].size(); ++j) {\n            std::cout << \"\\\"\" << result[i][j] << \"\\\"\" << (j == result[i].size() - 1 ? \"\" : \",\");\n        }\n        std::cout << \"]\" << (i == result.size() - 1 ? \"\" : \",\");\n    }\n    std::cout << \"]\" << std::endl;\n\n    return 0;\n}",
        "java": "import java.util.*;\nimport com.google.gson.Gson;\n\n// __USER_CODE_HERE__\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        List<List<String>> result = sol.solveNQueens(n);\n        \n        // Sort outer list for consistent output\n        Collections.sort(result, (l1, l2) -> {\n            for (int i = 0; i < l1.size(); i++) {\n                int cmp = l1.get(i).compareTo(l2.get(i));\n                if (cmp != 0) return cmp;\n            }\n            return 0;\n        });\n\n        Gson gson = new Gson();\n        System.out.println(gson.toJson(result).replaceAll(\"\\\\s\", \"\"));\n        sc.close();\n    }\n}"
    },
    "testCases": [
      { "input": "4", "expected": "[[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"],[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"]]" },
      { "input": "1", "expected": "[[\"Q\"]]" }
    ],
    "languageIds": { "python": 71, "javascript": 93, "cpp": 54, "java": 91 }
  },
];
