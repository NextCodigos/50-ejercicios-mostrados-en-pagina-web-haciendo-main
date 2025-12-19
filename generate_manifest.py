import os
import json
import re

def scan_exercises(root_dir):
    exercises = []
    # Regex to match ejercicio*.js
    regex = re.compile(r'ejercicio(\d+)\.js', re.IGNORECASE)

    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            match = regex.match(filename)
            if match:
                exercise_num = int(match.group(1))
                full_path = os.path.join(dirpath, filename)
                # Make path relative to root_dir
                rel_path = os.path.relpath(full_path, root_dir)
                
                exercises.append({
                    "id": exercise_num,
                    "name": f"Ejercicio {exercise_num}",
                    "path": rel_path
                })
    
    # Sort by exercise number
    exercises.sort(key=lambda x: x["id"])
    return exercises

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    exercises = scan_exercises(current_dir)
    
    with open(os.path.join(current_dir, 'exercises.json'), 'w', encoding='utf-8') as f:
        json.dump(exercises, f, indent=2)
    
    print(f"Generated manifest with {len(exercises)} exercises.")
