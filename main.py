from config.define import *

if USE_GUI == True:
    # import library use gui
    pass

import os
import sys
import time
import json
from process import PROCESS
from modules.upgrade import UPGRADE


if __name__ == "__main__":
    # PROCESS.main()
    # up = UPGRADE.backup()
    down = UPGRADE.checksum()
    # install = UPGRADE.install()
    # if os.path.isfile(PATH_CONFIG_VERSION):
    #     f_version = open(PATH_CONFIG_VERSION, 'r')
    #     version = json.load(f_version)
    #     f_version.close()
    #     print(version['version'])
    # while True:
    #     cmd = input("enter command: ")

    #     if cmd == "download":
    #         down = UPGRADE.download()
    #     elif cmd == "install":
    #         install = UPGRADE.install()
    #         print(install)
    #     elif cmd == "check":
    #         f_version = open(PATH_CONFIG_VERSION, 'r')
    #         version = json.load(f_version)
    #         f_version.close()

    #         print(version['version'])
    #     else:
    #         break