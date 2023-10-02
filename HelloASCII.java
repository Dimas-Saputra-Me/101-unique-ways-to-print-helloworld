// TEMPLATE
// Title  : [Hello, World! in ASCII Notation]
// Contributor: [CodeStrate](https://github.com/CodeStrate)

public class HelloASCII {
    public static void main(String[] args) {
        String s = "Hello, World!";
        for (int i = 0; i < s.length(); i++) {
            int ascii = Integer.valueOf(s.charAt(i));
            System.out.print(ascii + " ");
        }
    }
}
