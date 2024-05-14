import subprocess
import re


def get_ipv4_address():
    try:
        ipconfig_output = subprocess.check_output(['ipconfig', '/all'], universal_newlines=True)
        ipv4_pattern = r'IPv4 Address[.\s]+:\s+([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)'
        ipv4_match = re.search(ipv4_pattern, ipconfig_output)
        if ipv4_match:
            ipv4_address = ipv4_match.group(1)
            with open('.env.local', 'w') as file:
                file.truncate(0)
                file.write(f'REACT_APP_IPV4_ADDRESS = "{ipv4_address}"')
            return ipv4_address
        else:
            return "IPv4 address not found"
    except subprocess.CalledProcessError as e:
        return f"Error executing ipconfig command: {e}"


if __name__ == "__main__":
    ip_address = get_ipv4_address()
