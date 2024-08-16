import { Checkbox } from "@/ui-core/components/atoms/Checkbox/Checkbox.component";
import { Section } from "../../../components";
import { Button } from "@/ui-core/components/atoms/Button/Button.component";
import { RadioGroup, RadioGroupItem } from "@/ui-core/components/molecules/RadioGroup/RadioGroup.component";
import { Input } from "@/ui-core/components/atoms/Input/Input.component";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/ui-core/components/molecules/AlertDialog/AlertDialog.component";
import { buttonVariants } from "@/ui-core/components/atoms/Button/Button.component";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui-core/components/molecules/Dialog/Dialog.component";
import { ScrollArea } from "@/ui-core/components/molecules/ScrollArea/ScrollArea.component";
// import { X } from "lucide-react";
import { BsXLg } from "react-icons/bs";

function Components() {
  return (
    <div>
      <Section heading="Components">
        <div className="flex flex-col items-start gap-8 *:pl-4">
          <div className="flex flex-row gap-3">
            <Button variant="primary" disabled>
              Add User
            </Button>
            <Button variant="primary">Add User</Button>
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="secondary" disabled>
              Cancel
            </Button>
            <Button variant="secondary">Cancel</Button>
          </div>
          <div className="flex flex-col gap-2">
            <Checkbox disabled />
            <Checkbox />
            <Checkbox checked />
          </div>
          <div>
            <RadioGroup defaultValue="option-one">
              <RadioGroupItem value="option-three" id="option-three" disabled />
              <RadioGroupItem value="option-one" id="option-one" />
              <RadioGroupItem value="option-two" id="option-two" />
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Input type="email" disabled/>
              <p className="invisible font-quicksand text-sm text-primary peer-invalid:visible">
                This is invalid
              </p>
            </div>
            <div>
              <Input type="email" />
              <p className="invisible font-quicksand text-sm text-primary peer-invalid:visible">
                This is invalid
              </p>
            </div>
            <div>
              <Input type="email" value="Invalid input" />
              <p className="invisible font-quicksand text-sm text-primary peer-invalid:visible">
                This is invalid
              </p>
            </div>
          </div>
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Clear Cart</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogCancel className="ring-offset-white absolute right-4 top-4 rounded-sm p-0 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400">
                  <Button  variant="ghost" size="sm"><BsXLg /></Button>
                  <span className="sr-only">Close</span>
                </AlertDialogCancel>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Clear Cart
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    All the items in your cart will be removed! Please confirm
                    to proceed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Pop Up</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Title
                  </DialogTitle>
                </DialogHeader>
                <ScrollArea className="my-4 h-[50vh] px-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reiciendis eaque laboriosam totam voluptatum id corporis eum
                  neque omnis. Odio blanditiis dolores dolorum earum maiores at
                  quaerat esse accusamus aut assumenda, error et? Iusto,
                  adipisci ipsa sapiente similique harum explicabo officia
                  recusandae, id accusantium culpa laudantium beatae.
                  Repellendus porro deleniti consectetur laborum esse, assumenda
                  iste deserunt dicta ab non autem ipsa et ducimus velit.
                  Assumenda voluptatum quod culpa vel veniam ex quia. Alias
                  error quae ullam commodi. Deserunt, tenetur. In est, error
                  consequatur aperiam, similique optio et iusto commodi
                  consectetur facere quas quos nam repellat repudiandae suscipit
                  quibusdam. Quidem nulla ab possimus maiores earum eaque iusto
                  placeat veniam adipisci, quas saepe vel inventore, ipsum, sed
                  rem. Vel iure explicabo nihil! Doloremque numquam veniam
                  facere quia aliquam delectus at velit vel hic, eius unde
                  tenetur, commodi aspernatur deserunt. Hic aspernatur
                  laudantium, dolorum fuga nam rerum ex est voluptate
                  exercitationem itaque eligendi labore earum ut nisi pariatur
                  vel dolore nesciunt. Impedit laboriosam libero ullam aperiam.
                  Porro quia ducimus beatae ex est earum, quos illum voluptates
                  dicta quae quod fugiat. Porro, nesciunt quibusdam optio hic,
                  eum minus placeat nulla labore, est dolorem maxime
                  necessitatibus nisi rem aspernatur non qui nostrum perferendis
                  sit nam culpa repudiandae modi quasi aliquid quaerat. Laborum
                  magnam aliquid ad impedit nesciunt ea magni soluta eveniet.
                  Quaerat quam dolor maiores ab, quibusdam nulla est, ea ad
                  incidunt corrupti doloremque vel ut officiis laborum possimus
                  maxime iste saepe dignissimos qui, magnam tenetur temporibus.
                  Alias odio cum totam repellat a deleniti iusto optio aliquam,
                  cupiditate dolorum! Eveniet vel et ipsa fuga quas ratione
                  optio nostrum reprehenderit architecto necessitatibus fugit
                  veritatis non quisquam temporibus laborum veniam ad,
                  perferendis dolorum id. Harum illum velit quas iste corrupti!
                  Accusantium non odio, distinctio facere voluptatem porro!
                  Expedita ut quisquam libero sint exercitationem perferendis
                  harum obcaecati quod dolorem quas iste accusamus illo est eos
                  nisi, velit maiores animi molestiae impedit repellat placeat,
                  recusandae omnis necessitatibus voluptas! Ut, quidem iusto
                  minima autem quas harum ratione, inventore id debitis
                  accusamus expedita reprehenderit et doloremque delectus nisi
                  blanditiis nemo. Minus quo corrupti unde enim velit dicta ea
                  alias quis suscipit autem temporibus nemo rerum aliquam,
                  voluptates culpa, saepe odit blanditiis dolore id quibusdam!
                  Maxime earum magnam vitae perferendis, voluptates eaque! Sunt
                  expedita dolore delectus tempora corrupti veritatis eaque,
                  soluta enim perspiciatis distinctio animi inventore libero vel
                  a accusantium eos! Delectus tenetur perspiciatis facilis, modi
                  in sapiente quae animi eveniet qui, sed, harum quibusdam.
                  Neque mollitia blanditiis, ipsa saepe illo accusantium fugit
                  harum dolorum quos placeat reiciendis ducimus, accusamus quis
                  voluptate itaque illum eius quibusdam qui rerum cum! Libero
                  iure cupiditate ipsam suscipit, autem, id possimus,
                  dignissimos reiciendis quibusdam modi at maiores quidem natus.
                  Magni rerum ex aspernatur autem totam laborum fugiat facere
                  atque natus, dolorem explicabo, illo quibusdam eligendi
                  quisquam, porro quo consequuntur rem velit doloribus magnam.
                  Sed nostrum obcaecati similique molestias facere ab voluptates
                  ipsam ex vel assumenda mollitia eveniet adipisci rerum
                  eligendi illo amet recusandae soluta architecto expedita
                  praesentium, aut sapiente. Natus aliquid maiores saepe veniam
                  illum, quibusdam maxime?
                </ScrollArea>
                <DialogFooter>
                  <DialogClose
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    Cancel
                  </DialogClose>
                  <Button type="submit">Action Button</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Components;
