from config.define import *

if USE_GUI == True:
    # import library use gui
    pass

import os
import sys
import time
from process import PROCESS
from modules.upgrade import UPGRADE


if __name__ == "__main__":
    # PROCESS.main()
    # up = UPGRADE.backup()
    # down = UPGRADE.download()
    install = UPGRADE.checksum()