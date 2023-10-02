# TEMPLATE
# Title  : [Printing Hello World! by decoding base64 string] 
# Author : sysreset999 (https://github.com/sysreset999)

import base64

# Encoded Hello World in base64 string
encoded_helloworld = "SGVsbG8gV29ybGQh"

# Decoding the base64 string
decoding_helloworld = base64.b64decode(encoded_helloworld)

# Converting bytes to string
decoded_helloworld = decoding_helloworld.decode('utf-8')

print(decoded_helloworld) # printing Hello World!