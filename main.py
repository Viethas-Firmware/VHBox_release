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
    PROCESS.main()