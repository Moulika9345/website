import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">Languages</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                    <Card title="English" img="card1.png" text="Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="German" img="card1.png" text="Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Spanish" img="card1.png" text="Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pul." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Japanese" img="card1.png" text="Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pu." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
